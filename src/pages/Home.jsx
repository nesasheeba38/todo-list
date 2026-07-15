import { useState } from "react";
import { Container, Typography } from "@mui/material";

import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };


    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  console.log("Todos:", todos);

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );

    setTodos(updatedTodos);
  };

  const editTodo = (id, newTitle) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, title: newTitle }
        : todo
    );

    setTodos(updatedTodos);
  };

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