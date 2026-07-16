import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import TodoForm from "../components/todoForm/TodoForm";
import { useTodo } from "../context/TodoContext";

const AddTodo = () => {
  const { addTodo } = useTodo();

  const navigate = useNavigate();

  const handleAddTodo = (title) => {
    addTodo(title);

    navigate("/");
  };

  return (
    <Container maxWidth="sm">

      <Typography
        variant="h4"
        align="center"
        sx={{ mt: 4 }}
      >
        Add Todo
      </Typography>

      <TodoForm addTodo={handleAddTodo} />

    </Container>
  );
};

export default AddTodo;