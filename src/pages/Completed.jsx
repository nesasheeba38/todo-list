import { useMemo } from "react";
import TodoList from "../components/todoList/TodoList";
import { useTodo } from "../context/TodoContext";

const Completed = () => {
  const {
    todos,
    deleteTodo,
    toggleComplete,
    editTodo,
  } = useTodo();

  const completedTodos = useMemo(() => {
    return todos.filter((todo) => todo.completed);
  }, [todos]);

  return (
    <div className="completed-page animate-fade-in">
      <header className="page-header" style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 className="page-title" style={{ fontSize: "2.25rem", fontWeight: 800, background: "var(--gradient-accent)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.5rem" }}>
          Completed Tasks
        </h1>
        <p className="page-desc" style={{ color: "var(--text-secondary)" }}>
          A historical log of all tasks you have checked off.
        </p>
      </header>

      <TodoList
        todos={completedTodos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    </div>
  );
};

export default Completed;