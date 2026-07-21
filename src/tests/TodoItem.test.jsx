import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from "../components/todoItem/TodoItem";

describe("TodoItem Component", () => {
  const todo = {
    id: 1,
    title: "Learn React",
    completed: false,
  };

  let deleteTodo;
  let toggleComplete;
  let editTodo;

  beforeEach(() => {
    deleteTodo = jest.fn();
    toggleComplete = jest.fn();
    editTodo = jest.fn();
  });

  test("should display the todo title", () => {
    render(
      <TodoItem
        todo={todo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    );

    expect(
      screen.getByText("Learn React")
    ).toBeInTheDocument();
  });

  test("should call deleteTodo when Delete button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <TodoItem
        todo={todo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    );

    await user.click(
      screen.getByRole("button", {
        name: /delete/i,
      })
    );

    expect(deleteTodo).toHaveBeenCalledWith(1);
  });

  test("should call toggleComplete when complete icon is clicked", async () => {
    const user = userEvent.setup();

    render(
      <TodoItem
        todo={todo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    );

    await user.click(
      screen.getByTitle("Mark Complete")
    );

    expect(toggleComplete).toHaveBeenCalledWith(1);
  });

  test("should enter edit mode", async () => {
    const user = userEvent.setup();

    render(
      <TodoItem
        todo={todo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    );

    await user.click(
      screen.getByRole("button", {
        name: /edit/i,
      })
    );

    expect(
      screen.getByDisplayValue("Learn React")
    ).toBeInTheDocument();
  });

  test("should call editTodo when Save button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <TodoItem
        todo={todo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    );

    await user.click(
      screen.getByRole("button", {
        name: /edit/i,
      })
    );

    const input = screen.getByDisplayValue("Learn React");

    await user.clear(input);
    await user.type(input, "Learn Redux");

    await user.click(
      screen.getByRole("button", {
        name: /save/i,
      })
    );

    expect(editTodo).toHaveBeenCalledWith(
      1,
      "Learn Redux"
    );
  });

  test("should cancel editing", async () => {
    const user = userEvent.setup();

    render(
      <TodoItem
        todo={todo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    );

    await user.click(
      screen.getByRole("button", {
        name: /edit/i,
      })
    );

    const input = screen.getByDisplayValue("Learn React");

    await user.clear(input);
    await user.type(input, "New Title");

    await user.click(
      screen.getByRole("button", {
        name: /cancel/i,
      })
    );

    expect(editTodo).not.toHaveBeenCalled();

    expect(
      screen.getByText("Learn React")
    ).toBeInTheDocument();
  });

  test("should not save an empty title", async () => {
    const user = userEvent.setup();

    render(
      <TodoItem
        todo={todo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    );

    await user.click(
      screen.getByRole("button", {
        name: /edit/i,
      })
    );

    const input = screen.getByDisplayValue("Learn React");

    await user.clear(input);

    await user.click(
      screen.getByRole("button", {
        name: /save/i,
      })
    );

    expect(editTodo).not.toHaveBeenCalled();
  });

  test("should show 'Mark Pending' when todo is completed", () => {
    render(
      <TodoItem
        todo={{
          ...todo,
          completed: true,
        }}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    );

    expect(
      screen.getByTitle("Mark Pending")
    ).toBeInTheDocument();
  });

  test("should show 'Mark Complete' when todo is pending", () => {
    render(
      <TodoItem
        todo={todo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    );

    expect(
      screen.getByTitle("Mark Complete")
    ).toBeInTheDocument();
  });
});