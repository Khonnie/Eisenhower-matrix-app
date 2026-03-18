import Quadrant from "./Quadrant.jsx";

export default function Matrix({
  tasks,
  toggleComplete,
  editTask,
  deleteTask,
}) {
  return (
    <div className="matrix">
      <Quadrant
        title="DO immediately"
        q="Q1"
        tasks={tasks}
        toggleComplete={toggleComplete}
        editTask={editTask}
        deleteTask={deleteTask}
      />

      <Quadrant
        title="PLAN and prioritize"
        q="Q2"
        tasks={tasks}
        toggleComplete={toggleComplete}
        editTask={editTask}
        deleteTask={deleteTask}
      />

      <Quadrant
        title="DELEGATE for completion"
        q="Q3"
        tasks={tasks}
        toggleComplete={toggleComplete}
        editTask={editTask}
        deleteTask={deleteTask}
      />

      <Quadrant
        title="DELETE these tasks"
        q="Q4"
        tasks={tasks}
        toggleComplete={toggleComplete}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}