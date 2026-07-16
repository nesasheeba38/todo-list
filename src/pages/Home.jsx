import { Container, Typography } from "@mui/material";

import TodoForm from "../components/todoForm/TodoForm";
import TodoList from "../components/todoList/TodoList";

import { useTodo } from "../context/TodoContext";

const Home = () => {

  const {
    todos,
    addTodo,
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

      <TodoForm addTodo={addTodo} />

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