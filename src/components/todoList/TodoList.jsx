import TodoItem from "../todoItem/TodoItem";

const TodoList = ({
  todos,
  deleteTodo,
  toggleComplete,
  editTodo,
}) => {

    console.log("TodoList Todos:", todos);
  if (todos.length === 0) {
    return (
      <h3
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        No Todos Found
      </h3>
    );
  }

  return (
    <div style={{ marginTop: "20px" }}>
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