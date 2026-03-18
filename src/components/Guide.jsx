export default function Guide() {
  return (
    <div className="guide">
      <h3>How to use this matrix</h3>

      <ul className="guide-steps">
        <li>
          ➕ Add a task using the input above. New tasks go to{" "}
          <strong>DO (Urgent & Important)</strong> by default.
        </li>

        <li>
          ☰ Drag tasks using the handle to move them between quadrants.
        </li>

        <li>
          ☐ Check the box to mark a task as completed.
        </li>

        <li>
          📌 Completed tasks automatically move to the bottom of the list.
        </li>

        <li>
          ✏️ Use the edit icon to update a task.
        </li>

        <li>
          🗑️ Use the delete icon to remove a task.
        </li>
      </ul>

      <div className="guide-grid">
        <div className="guide-item do">
          <strong>DO</strong>
          <p>Urgent & Important → Do these immediately</p>
        </div>

        <div className="guide-item plan">
          <strong>PLAN</strong>
          <p>Important but Not Urgent → Schedule these</p>
        </div>

        <div className="guide-item delegate">
          <strong>DELEGATE</strong>
          <p>Urgent but Not Important → Assign to others</p>
        </div>

        <div className="guide-item delete">
          <strong>DELETE</strong>
          <p>Not Urgent & Not Important → Eliminate</p>
        </div>
      </div>
    </div>
  );
}
