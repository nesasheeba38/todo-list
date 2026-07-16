import { Container, Typography } from "@mui/material";

import TodoList from "../components/todoList/TodoList";
import { useTodo } from "../context/TodoContext";

const Completed = () => {
  const {
    todos,
    deleteTodo,
    toggleComplete,
    editTodo,
  } = useTodo();

  const completedTodos = todos.filter(
    (todo) => todo.completed
  );

  return (
    <Container maxWidth="md">

      <Typography
        variant="h4"
        align="center"
        sx={{ mt: 4 }}
      >
        Completed Todos
      </Typography>

      <TodoList
        todos={completedTodos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />

    </Container>
  );
};

export default Completed;