import { useState, useEffect, useMemo } from "react";
import TodoList from "../components/todoList/TodoList";
import TodoStats from "../components/TodoStats/TodoStats";
import { useTodo } from "../context/TodoContext";
import "./Home.scss";

const Home = () => {
  const {
    todos,
    deleteTodo,
    toggleComplete,
    editTodo,
  } = useTodo();

  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const filteredTodos = useMemo(() => {
    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }
    if (filter === "pending") {
      return todos.filter((todo) => !todo.completed);
    }
    return todos;
  }, [todos, filter]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="home-page animate-fade-in">
      <header className="page-header">
        <h1 className="page-title">Personal Dashboard</h1>
        <p className="page-desc">Stay organized, track metrics, and boost productivity.</p>
      </header>

      <TodoStats todos={todos} />

      <div className="filters-tabs">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Tasks
        </button>
        <button
          className={`filter-btn ${filter === "pending" ? "active" : ""}`}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
        <button
          className={`filter-btn ${filter === "completed" ? "active" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    </div>
  );
};

export default Home;