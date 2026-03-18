export default function Header({onAddClick}) {
  return (
    <div className="header">
      <div className="header-left">
      <div className="logo">EM</div>
      <div>
      <h1>Eisenhower Matrix</h1>
      <p className="subtitle">Organise tasks by urgency and importance</p>
      </div>
      </div>
      <button className="add-btn" onClick={onAddClick}>+ Add Task</button>
    </div>
  );
}