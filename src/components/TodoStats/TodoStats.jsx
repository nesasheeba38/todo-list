import { Paper, Typography } from "@mui/material";
import { useMemo } from "react";

const TodoStats = ({ todos }) => {

  const totalTodos = useMemo(() => {
    return todos.length;
  }, [todos]);

  const completedTodos = useMemo(() => {
    return todos.filter((todo) => todo.completed).length;
  }, [todos]);

  const pendingTodos = useMemo(() => {
    return totalTodos - completedTodos;
  }, [totalTodos, completedTodos]);

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        mt: 3,
      }}
    >
      <Typography variant="h6">
        Total Todos : {totalTodos}
      </Typography>

      <Typography variant="h6">
        Completed : {completedTodos}
      </Typography>

      <Typography variant="h6">
        Pending : {pendingTodos}
      </Typography>
    </Paper>
  );
};

export default TodoStats;