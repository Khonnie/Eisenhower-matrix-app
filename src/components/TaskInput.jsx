// TaskInput.jsx
import { useState, forwardRef } from "react";

// Use forwardRef so App can scroll to this component
const TaskInput = forwardRef(({ addTask }, ref) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text) return;
    addTask(text);
    setText("");
  };

  return (
    <div className="task-input" ref={ref}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
});

export default TaskInput;
