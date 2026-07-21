import { LinearProgress } from "@mui/material";
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

  const completionPercentage = useMemo(() => {
    return totalTodos > 0
      ? Math.round((completedTodos / totalTodos) * 100)
      : 0;
  }, [totalTodos, completedTodos]);

  return (
    <div className="stats-container animate-fade-in">
      <div className="stats-grid">

        <div className="stat-card total">
          <span className="stat-label">Total Tasks</span>
          <span className="stat-value">{totalTodos}</span>
        </div>

        <div className="stat-card completed">
          <span className="stat-label">Completed</span>
          <span className="stat-value">{completedTodos}</span>
        </div>

        <div className="stat-card pending">
          <span className="stat-label">Pending</span>
          <span className="stat-value">{pendingTodos}</span>
        </div>

      </div>

      <div className="progress-container">
        <span className="progress-text">Progress</span>

        <LinearProgress
          variant="determinate"
          value={completionPercentage}
          className="progress-track" 
          sx={{
            height: 10,
            borderRadius: 5,
            mt: 1,
            mb: 1,
          }}
        />

        <span className="progress-text">
          {completionPercentage}%
        </span>
      </div>
    </div>
  );
};

export default TodoStats;