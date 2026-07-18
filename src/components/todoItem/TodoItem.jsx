import { useState, memo } from "react";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  TextField,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UndoIcon from "@mui/icons-material/Undo";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";

const TodoItem = ({
  todo,
  deleteTodo,
  toggleComplete,
  editTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const [newTitle, setNewTitle] = useState(todo.title);

  const handleSave = () => {
    if (newTitle.trim() === "") return;

    editTodo(todo.id, newTitle);

    setIsEditing(false);
  };

  return (
    <Card
      elevation={4}
      sx={{
        mb: 2,
        borderRadius: 3,
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
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
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={handleSave}
              >
                Save
              </Button>

              <Button
                variant="outlined"
                startIcon={<CloseIcon />}
                onClick={() =>
                  setIsEditing(false)
                }
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
                color: todo.completed
                  ? "text.secondary"
                  : "text.primary",
              }}
            >
              {todo.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
                flexWrap: "wrap",
              }}
            >
              <Button
                variant="contained"
                color="success"
                startIcon={
                  todo.completed ? (
                    <UndoIcon />
                  ) : (
                    <CheckCircleIcon />
                  )
                }
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
                startIcon={<EditIcon />}
                onClick={() =>
                  setIsEditing(true)
                }
              >
                Edit
              </Button>

              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
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

export default memo(TodoItem);