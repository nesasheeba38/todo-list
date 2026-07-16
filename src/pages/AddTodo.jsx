import { Container, Typography } from "@mui/material";

import TodoForm from "../components/todoForm/TodoForm";

const AddTodo = () => {
  return (
    <Container maxWidth="sm">

      <Typography
        variant="h4"
        align="center"
        sx={{ mt: 4 }}
      >
        Add New Todo
      </Typography>

      <TodoForm />

    </Container>
  );
};

export default AddTodo;