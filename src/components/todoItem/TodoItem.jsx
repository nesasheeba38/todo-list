import { useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  TextField,
} from "@mui/material";

const TodoItem = ({
  todo,
  deleteTodo,
  toggleComplete,
  editTodo,
}) => {

  const [isEditing, setIsEditing] = useState(false);

  const [newTitle, setNewTitle] = useState(todo.title);

  const handleSave = () => {

    if (newTitle.trim() === "") {
      return;
    }

    editTodo(todo.id, newTitle);

    setIsEditing(false);
  };

  return (
    <Card sx={{ mb: 2 }}>

      <CardContent>

        {isEditing ? (

          <>
            <TextField
              fullWidth
              value={newTitle}
              onChange={(e) =>
                setNewTitle(e.target.value)
              }
            />

            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
              }}
            >
              <Button
                variant="contained"
                onClick={handleSave}
              >
                Save
              </Button>

              <Button
                variant="outlined"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>

            </Box>

          </>

        ) : (

          <>

            <Typography
              variant="h6"
              sx={{
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
              }}
            >
              {todo.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
              }}
            >

              <Button
                variant="contained"
                color="success"
                onClick={() =>
                  toggleComplete(todo.id)
                }
              >
                {todo.completed
                  ? "Undo"
                  : "Complete"}
              </Button>

              <Button
                variant="contained"
                color="warning"
                onClick={() =>
                  setIsEditing(true)
                }
              >
                Edit
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={() =>
                  deleteTodo(todo.id)
                }
              >
                Delete
              </Button>

            </Box>

          </>

        )}

      </CardContent>

    </Card>
  );
};

export default TodoItem;