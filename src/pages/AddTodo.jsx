import TodoForm from "../components/todoForm/TodoForm";

const AddTodo = () => {
  return (
    <div className="add-todo-page animate-fade-in" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <header className="page-header" style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 className="page-title" style={{ fontSize: "2.25rem", fontWeight: 800, background: "var(--gradient-accent)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.5rem" }}>
          New Task
        </h1>
        <p className="page-desc" style={{ color: "var(--text-secondary)" }}>
          Create a new checklist item in your workspace.
        </p>
      </header>
      <TodoForm />
    </div>
  );
};

export default AddTodo;