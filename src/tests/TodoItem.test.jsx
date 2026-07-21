import { render, screen } from "@testing-library/react";
import TodoItem from "../components/todoItem/TodoItem";
import userEvent from "@testing-library/user-event";

describe("TodoItem Component", () => {

  test("should display the todo title", () => {

    const todo = {
      id: 1,
      title: "Learn React",
      completed: false,
    };

    render(
      <TodoItem
        todo={todo}
        deleteTodo={jest.fn()}
        toggleComplete={jest.fn()}
        editTodo={jest.fn()}
      />
    );

    expect(
      screen.getByText("Learn React")
    ).toBeInTheDocument();

  });

});
test("should call deleteTodo when Delete button is clicked", async () => {

  const user = userEvent.setup();

  const deleteTodo = jest.fn();

  const todo = {
    id: 1,
    title: "Learn React",
    completed: false,
  };

  render(
    <TodoItem
      todo={todo}
      deleteTodo={deleteTodo}
      toggleComplete={jest.fn()}
      editTodo={jest.fn()}
    />
  );

  const deleteButton = screen.getByRole("button", {
    name: /delete/i,
  });

  await user.click(deleteButton);

  expect(deleteTodo).toHaveBeenCalledWith(1);

});
test("should call deleteTodo when Delete button is clicked", async () => {

  const user = userEvent.setup();

  const deleteTodo = jest.fn();

  const todo = {
    id: 1,
    title: "Learn React",
    completed: false,
  };

  render(
    <TodoItem
      todo={todo}
      deleteTodo={deleteTodo}
      toggleComplete={jest.fn()}
      editTodo={jest.fn()}
    />
  );

  const deleteButton = screen.getByRole("button", {
    name: /delete/i,
  });

  await user.click(deleteButton);

  expect(deleteTodo).toHaveBeenCalledWith(1);

});
test("should call editTodo when Save button is clicked", async () => {

  const user = userEvent.setup();

  const editTodo = jest.fn();

  const todo = {
    id: 1,
    title: "Learn React",
    completed: false,
  };

  render(
    <TodoItem
      todo={todo}
      deleteTodo={jest.fn()}
      toggleComplete={jest.fn()}
      editTodo={editTodo}
    />
  );

  // Click Edit
  const editButton = screen.getByRole("button", {
    name: /edit/i,
  });

  await user.click(editButton);

  // Find the input
  const input = screen.getByDisplayValue("Learn React");

  // Clear the input
  await user.clear(input);

  // Type new title
  await user.type(input, "Learn Redux");

  // Click Save
  const saveButton = screen.getByRole("button", {
    name: /save/i,
  });

  await user.click(saveButton);

  expect(editTodo).toHaveBeenCalledWith(
    1,
    "Learn Redux"
  );

});