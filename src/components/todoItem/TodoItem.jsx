import { useState, memo } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import "./TodoItem.scss";

const TodoItem = ({
  todo,
  deleteTodo,
  toggleComplete,
  editTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleSave = (e) => {
    e.preventDefault();
    if (newTitle.trim() === "") return;
    editTodo(todo.id, newTitle);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item-card animate-fade-in ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
        <form onSubmit={handleSave} className="todo-edit-container">
          <div className="edit-input-wrapper">
            <input
              type="text"
              className="input-text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div className="edit-actions">
            <button type="submit" className="btn btn-success">
              <SaveIcon fontSize="small" /> Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setNewTitle(todo.title);
                setIsEditing(false);
              }}
            >
              <CloseIcon fontSize="small" /> Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="todo-item-content">
          <div
            className={`todo-check-wrapper ${todo.completed ? "completed" : ""}`}
            onClick={() => toggleComplete(todo.id)}
            title={todo.completed ? "Mark Pending" : "Mark Complete"}
          >
            {todo.completed ? (
              <CheckCircleIcon />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
          </div>

          <div className="todo-title-container">
            <span className="todo-title">{todo.title}</span>
          </div>

          <div className="todo-actions">
            <button
              className="btn btn-warning"
              onClick={() => setIsEditing(true)}
              title="Edit Task"
            >
              <EditIcon fontSize="small" />
              <span>Edit</span>
            </button>

            <button
              className="btn btn-danger"
              onClick={() => deleteTodo(todo.id)}
              title="Delete Task"
            >
              <DeleteIcon fontSize="small" />
              <span>Delete</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(TodoItem);