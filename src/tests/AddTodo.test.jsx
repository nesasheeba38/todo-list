import { render, screen } from "@testing-library/react";
import AddTodo from "../pages/AddTodo";

jest.mock("../components/todoForm/TodoForm", () => () => (
  <div data-testid="todo-form">
    TodoForm Component
  </div>
));

describe("AddTodo Component", () => {
  test("should render page title", () => {
    render(<AddTodo />);

    expect(
      screen.getByRole("heading", {
        name: /new task/i,
      })
    ).toBeInTheDocument();
  });

  test("should render page description", () => {
    render(<AddTodo />);

    expect(
      screen.getByText(
        "Create a new checklist item in your workspace."
      )
    ).toBeInTheDocument();
  });

  test("should render TodoForm component", () => {
    render(<AddTodo />);

    expect(
      screen.getByTestId("todo-form")
    ).toBeInTheDocument();
  });

  test("should render only one TodoForm component", () => {
    render(<AddTodo />);

    expect(
      screen.getAllByTestId("todo-form")
    ).toHaveLength(1);
  });
});