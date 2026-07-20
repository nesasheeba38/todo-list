import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useState,
  useEffect,
} from "react";

import todoReducer from "../reducer/todoReducer";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  
  // Theme state
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || "dark"; // Default to dark theme for maximum aesthetic impact
  });

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const addTodo = useCallback((title) => {
    dispatch({
      type: "ADD",
      payload: title,
    });
  },[]);

  const deleteTodo =useCallback((id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  },[]);

  const editTodo = useCallback((id, title) => {
    dispatch({
      type: "UPDATE",
      payload: {
        id,
        title,
      },
    });
  },[]);

  const toggleComplete = useCallback((id) => {
    dispatch({
      type:"COMPLETE",
      payload: id,
    });
  },[]);
  

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,        
        editTodo,
        toggleComplete,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () =>
  useContext(TodoContext);