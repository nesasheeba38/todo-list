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