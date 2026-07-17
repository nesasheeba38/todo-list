import { Container, Typography } from "@mui/material";

import TodoList from "../components/todoList/TodoList";
import { useTodo } from "../context/TodoContext";
import TodoStats from "../components/TodoStats/TodoStats"

const Home = () => {

  const {
    todos,
    deleteTodo,
    toggleComplete,
    editTodo,
  } = useTodo();

  return (
    <Container maxWidth="md">

      <Typography
        variant="h4"
        align="center"
        sx={{ mt: 4 }}
      >
        Todo List App
      </Typography>

      <TodoStats todos={todos} />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />

    </Container>
  );
};

export default Home;