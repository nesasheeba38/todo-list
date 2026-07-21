import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import { TodoProvider } from "../context/TodoContext";
import TodoForm from "../components/todoForm/TodoForm";
import TodoList from "../components/todoList/TodoList";

describe("Todo Integration", () => {

  test("should add a new todo and display it in the list", async () => {

    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <TodoProvider>
          <TodoForm />
          <TodoList />
        </TodoProvider>
      </MemoryRouter>
    );

    const input = screen.getByPlaceholderText(
      "What needs to be done?"
    );

    await user.type(input, "Learn Jest");

    const addButton = screen.getByRole("button", {
      name: /add task/i,
    });

    await user.click(addButton);
    

    expect(
      screen.getByText("Learn Jest")
    ).toBeInTheDocument();

  });

});
test("should delete a todo from the list", async () => {

  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </MemoryRouter>
  );

  
  const input = screen.getByPlaceholderText(
    "What needs to be done?"
  );

  await user.type(input, "Delete Me");

  const addButton = screen.getByRole("button", {
    name: /add task/i,
  });

  await user.click(addButton);

  
  expect(
    screen.getByText("Delete Me")
  ).toBeInTheDocument();

  
  const deleteButton = screen.getByRole("button", {
    name: /delete/i,
  });

  
  await user.click(deleteButton);

  
  expect(
    screen.queryByText("Delete Me")
  ).not.toBeInTheDocument();

});
test("should mark a todo as completed", async () => {

  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </MemoryRouter>
  );

  
  const input = screen.getByPlaceholderText(
    "What needs to be done?"
  );

  await user.type(input, "Complete Jest");

  const addButton = screen.getByRole("button", {
    name: /add task/i,
  });

  await user.click(addButton);

  
  expect(
    screen.getByText("Complete Jest")
  ).toBeInTheDocument();

  
  const completeButton = screen.getByTitle(
    "Mark Complete"
  );

  
  await user.click(completeButton);

  
  expect(
    screen.getByTitle("Mark Pending")
  ).toBeInTheDocument();

});
test("should edit a todo", async () => {

  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </MemoryRouter>
  );

  const input = screen.getByPlaceholderText(
    "What needs to be done?"
  );

  await user.type(input, "Old Todo");

  const addButton = screen.getByRole("button", {
    name: /add task/i,
  });

  await user.click(addButton);

  expect(
    screen.getByText("Old Todo")
  ).toBeInTheDocument();

  const editButton = screen.getByRole("button", {
    name: /edit/i,
  });

  await user.click(editButton);

  const editInput = screen.getByDisplayValue(
    "Old Todo"
  );

  await user.clear(editInput);

  await user.type(
    editInput,
    "Updated Todo"
  );

  const saveButton = screen.getByRole("button", {
    name: /save/i,
  });

  await user.click(saveButton);

  expect(
    screen.getByText("Updated Todo")
  ).toBeInTheDocument();

});
test("should not add an empty todo", async () => {

  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </MemoryRouter>
  );

  const addButton = screen.getByRole("button", {
    name: /add task/i,
  });

  
  await user.click(addButton);

  expect(
    screen.queryByText("Learn Jest")
  ).not.toBeInTheDocument();

});
test("should cancel editing a todo", async () => {

  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </MemoryRouter>
  );

  const input = screen.getByPlaceholderText(
    "What needs to be done?"
  );

  await user.type(input, "Learn React");

  const addButton = screen.getByRole("button", {
    name: /add task/i,
  });

  await user.click(addButton);

  expect(
    screen.getByText("Learn React")
  ).toBeInTheDocument();

  const editButton = screen.getByRole("button", {
    name: /edit/i,
  });

  await user.click(editButton);

  const editInput = screen.getByDisplayValue(
    "Learn React"
  );

  await user.clear(editInput);

  await user.type(
    editInput,
    "Learn Jest"
  );

  const cancelButton = screen.getByRole("button", {
    name: /cancel/i,
  });

  await user.click(cancelButton);

  expect(
    screen.getByText("Learn React")
  ).toBeInTheDocument();

  expect(
    screen.queryByText("Learn Jest")
  ).not.toBeInTheDocument();

});
test("should display empty state when there are no todos", () => {

  render(
    <MemoryRouter>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </MemoryRouter>
  );

  expect(
    screen.getByText("No Tasks Found")
  ).toBeInTheDocument();

  expect(
    screen.getByText(
      "Your dashboard is clear! Add some tasks to get started."
    )
  ).toBeInTheDocument();

});
test("should add multiple todos", async () => {

  const user = userEvent.setup();

  render(
    <MemoryRouter>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </MemoryRouter>
  );

  const input = screen.getByPlaceholderText(
    "What needs to be done?"
  );

  const addButton = screen.getByRole("button", {
    name: /add task/i,
  });

  
  await user.type(input, "React");
  await user.click(addButton);

  
  await user.type(input, "JavaScript");
  await user.click(addButton);

  
  await user.type(input, "Jest");
  await user.click(addButton);

  expect(
    screen.getByText("React")
  ).toBeInTheDocument();

  expect(
    screen.getByText("JavaScript")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Jest")
  ).toBeInTheDocument();

});