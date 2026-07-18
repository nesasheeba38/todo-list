import { useState, useEffect } from "react";

import {
  Container,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

import TodoList from "../components/todoList/TodoList";
import TodoStats from "../components/TodoStats/TodoStats";
import { useTodo } from "../context/TodoContext";

const Home = () => {
  const {
    todos,
    deleteTodo,
    toggleComplete,
    editTodo,
  } = useTodo();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

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