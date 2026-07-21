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

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const addTodo = useCallback((title) => {
    dispatch({
      type: "ADD",
      payload: title,
    });
  }, []);

  const deleteTodo = useCallback((id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }, []);

  const editTodo = useCallback((id, title) => {
    dispatch({
      type: "UPDATE",
      payload: {
        id,
        title,
      },
    });
  }, []);

  const toggleComplete = useCallback((id) => {
    dispatch({
      type: "COMPLETE",
      payload: id,
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : "light"
    );
  }, []);

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

export const useTodo = () => useContext(TodoContext);