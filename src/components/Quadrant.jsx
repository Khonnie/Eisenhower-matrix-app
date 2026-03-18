import { useDroppable } from "@dnd-kit/core";
import TaskCard from "./TaskCard.jsx";

export default function Quadrant({
  title,
  q,
  tasks,
  toggleComplete,
  editTask,
  deleteTask,
}) {
  const { setNodeRef } = useDroppable({ id: q });

  // Filter tasks for this quadrant
  const filtered = tasks.filter((task) => task.quadrant === q);

  // Sort: incomplete first, completed last
  const sortedTasks = [...filtered].sort(
    (a, b) => a.completed - b.completed
  );

  return (
    <div ref={setNodeRef} className={`quadrant ${q.toLowerCase()}`}>
      <h2>{title}</h2>

      <div className="task-list">
        {sortedTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}