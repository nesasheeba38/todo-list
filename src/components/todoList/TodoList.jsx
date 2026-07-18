import { Box, Typography } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";

import TodoItem from "../todoItem/TodoItem";

const TodoList = ({
  todos,
  deleteTodo,
  toggleComplete,
  editTodo,
}) => {
  if (todos.length === 0) {
    return (
      <Box
        sx={{
          textAlign: "center",
          mt: 8,
        }}
      >
        <InboxIcon
          sx={{
            fontSize: 80,
            color: "grey.500",
          }}
        />

        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mt: 2 }}
        >
          No Todos Found
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
        >
          Add your first todo to get started.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        mt: 3,
      }}
    >
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </Box>
  );
};

export default TodoList;