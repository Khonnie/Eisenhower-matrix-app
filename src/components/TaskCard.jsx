import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";

export default function TaskCard({
  task,
  toggleComplete,
  editTask,
  deleteTask,
}) {
  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({ id: task.id });

  const style = transform
    ? { transform: `translate(${transform.x}px, ${transform.y}px)`,
  zIndex: 1000 }
    : undefined;

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.title);

  const handleSave = () => {
    if (!text.trim()) return;
    editTask(task.id, text);
    setIsEditing(false);
  };

  return (
    <div ref={setNodeRef} style={style} className="task-row">
      
      {/* LEFT SIDE: DRAG HANDLE, CHECKBOX, TEXT/INPUT */}
      <div className="task-left">
      {/* ✅ Drag Handle ONLY */}
      <p className="drag-handle" {...listeners} {...attributes}>
        ☰
      </p>

      {/* ✅ Checkbox */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />

      {/* ✅ Text or Edit Input */}
      {isEditing ? (
        <input
          className="edit-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleSave}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          autoFocus
        />
      ) : (
        <span className={task.completed ? "completed" : ""}>
          {task.title}
        </span>
      )}
      </div>

      {/* RIGHT SIDE: EDIT & DELETE BUTTONS */}
      <div className="task-right">
      {/* ✅ Edit Button */}
      <button
        className="edit-btn"
        onClick={() => setIsEditing(true)}
      >
        ✏️
      </button>

      {/* ✅ Delete Button */}
      <button
        className="delete-btn"
        onClick={() => deleteTask(task.id)}
      >
        🗑️
      </button>
    </div>
    </div>
  );
}