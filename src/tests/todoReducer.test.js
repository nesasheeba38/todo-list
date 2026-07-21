import todoReducer from "../reducer/todoReducer";

describe("Todo Reducer", () => {

  test("should add a new todo", () => {

    const state = [];

    const action = {
      type: "ADD",
      payload: "Learn React",
    };

    const result = todoReducer(state, action);

    expect(result).toHaveLength(1);

    expect(result[0].title).toBe("Learn React");

    expect(result[0].completed).toBe(false);

  });

});
test("should delete a todo", () => {

  const state = [
    {
      id: 1,
      title: "React",
      completed: false,
    },
    {
      id: 2,
      title: "JavaScript",
      completed: false,
    },
  ];

  const action = {
    type: "DELETE",
    payload: 1,
  };

  const result = todoReducer(state, action);

  expect(result).toHaveLength(1);

  expect(result[0].id).toBe(2);

});
test("should update a todo title", () => {

  const state = [
    {
      id: 1,
      title: "React",
      completed: false,
    },
    {
      id: 2,
      title: "JavaScript",
      completed: false,
    },
  ];

  const action = {
    type: "UPDATE",
    payload: {
      id: 1,
      title: "Learn React",
    },
  };

  const result = todoReducer(state, action);

  expect(result).toHaveLength(2);

  expect(result[0].title).toBe("Learn React");

  expect(result[1].title).toBe("JavaScript");

});
test("should toggle the completed status of a todo", () => {

  const state = [
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Learn JavaScript",
      completed: false,
    },
  ];

  const action = {
    type: "COMPLETE",
    payload: 1,
  };

  const result = todoReducer(state, action);

  expect(result).toHaveLength(2);

  expect(result[0].completed).toBe(true);

  expect(result[1].completed).toBe(false);

});