const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false,
        },
      ];

    case "DELETE":
      return state.filter(
        (todo) => todo.id !== action.payload
      );

    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              title: action.payload.title,
            }
          : todo
      );

    case "COMPLETE":
      return state.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );

    default:
      return state;
  }
};

export default todoReducer;