import {
  createContext,
  useContext,
  useReducer,
} from "react";

import todoReducer from "../reducer/todoReducer";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

  const [todos, dispatch] = useReducer(todoReducer,[]);

  const addTodo = (title) => {
    dispatch({
      type: "ADD",
      payload: title,
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const editTodo = (id, title) => {
    dispatch({
      type: "UPDATE",
      payload: {
        id,
        title,
      },
    });
  };

  const toggleComplete = (id) => {
    dispatch({
      type: "COMPLETE",
      payload: id,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        editTodo,
        toggleComplete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () =>
  useContext(TodoContext);