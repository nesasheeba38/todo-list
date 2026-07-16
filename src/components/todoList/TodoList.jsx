import { Box, Typography } from "@mui/material";
import TodoItem from "../todoItem/TodoItem";

const TodoList = ({
  todos,
  deleteTodo,
  toggleComplete,
  editTodo,
}) => {

  if (todos.length === 0) {
    return (
      <Typography
        variant="h6"
        align="center"
        sx={{ mt: 4 }}
      >
        No Todos Found
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: 3 }}>
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