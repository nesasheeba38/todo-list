import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      return;
    }

    addTodo(title);

    setTitle("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 2,
        mt: 4,
        justifyContent: "center",
      }}
    >
      <TextField
        label="Enter Todo"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />

      <Button
        type="submit"
        variant="contained"
      >
        Add Todo
      </Button>
    </Box>
  );
};

export default TodoForm;