// App.jsx
import { useState, useRef, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";

import Header from "./components/Header.jsx";
import TaskInput from "./components/TaskInput.jsx";
import Matrix from "./components/Matrix.jsx";
import Guide from "./components/Guide.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  
//load from localstorage
const [tasks, setTasks] = useState(() =>{

  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [];
})

//save to localstorage

useEffect(() =>{
  localStorage.setItem("tasks", JSON.stringify(tasks));
},[tasks])

  
  // Ref for scrolling to TaskInput
  const taskInputRef = useRef(null);

  // ➕ Add Task
  const addTask = (title) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      quadrant: "Q1",
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // ✅ Toggle Complete
  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // ✏️ Edit Task
  const editTask = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, title: newTitle }
          : task
      )
    );
  };

  // 🗑️ Delete Task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // 🧲 Drag & Drop
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id;
    const newQuadrant = over.id;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? { ...task, quadrant: newQuadrant }
          : task
      )
    );
  };

  // Scroll to TaskInput
  const scrollToTaskInput = () => {
    taskInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    taskInputRef.current?.querySelector("input")?.focus(); // auto-focus input
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="app">
        {/* Header with Add Task button */}
        <Header onAddClick={scrollToTaskInput} />

        {/* Task Input with ref for scrolling */}
        <TaskInput addTask={addTask} ref={taskInputRef} />

        {/* Matrix showing tasks */}
        <Matrix
          tasks={tasks}
          toggleComplete={toggleComplete}
          editTask={editTask}
          deleteTask={deleteTask}
        />
        <Guide />

        {/* Footer */}
        <Footer />
      </div>
    </DndContext>
  );
}
