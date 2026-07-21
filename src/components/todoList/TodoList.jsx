import InboxIcon from "@mui/icons-material/Inbox";
import TodoItem from "../todoItem/TodoItem";
import { useTodo } from "../../context/TodoContext";
import "./TodoList.scss";

const TodoList = () => {

  const {
    todos,
    deleteTodo,
    toggleComplete,
    editTodo,
  } = useTodo();

  if (todos.length === 0) {
    return (
      <div className="empty-state glass-card animate-fade-in">
        <InboxIcon className="empty-icon" />
        <h3 className="empty-title">No Tasks Found</h3>
        <p className="empty-desc">
          Your dashboard is clear! Add some tasks to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="todo-list-container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;