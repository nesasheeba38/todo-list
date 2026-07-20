import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTodo } from "../../context/TodoContext";
import "./TodoForm.scss";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodo();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      return;
    }

    addTodo(title);
    setTitle("");
    navigate("/");
  };

  return (
    <div className="todo-form-container glass-card animate-fade-in">
      <form className="todo-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="input-text"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            autoFocus
          />
        </div>

        <button type="submit" className="btn-submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;