import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { useTodo } from "../context/TodoContext";

jest.mock("../context/TodoContext");

jest.mock("../components/TodoStats/TodoStats", () => () => (
  <div data-testid="todo-stats">TodoStats Component</div>
));

jest.mock("../components/todoList/TodoList", () => () => (
  <div data-testid="todo-list">TodoList Component</div>
));

describe("Home", () => {
  beforeEach(() => {
    useTodo.mockReturnValue({
      todos: [
        {
          id: 1,
          title: "React",
          completed: false,
        },
      ],
      deleteTodo: jest.fn(),
      toggleComplete: jest.fn(),
      editTodo: jest.fn(),
    });
  });

  test("should render page title", () => {
    render(<Home />);

    expect(
      screen.getByText("Todo List App")
    ).toBeInTheDocument();
  });

  test("should render TodoStats component", () => {
    render(<Home />);

    expect(
      screen.getByTestId("todo-stats")
    ).toBeInTheDocument();
  });

  test("should render TodoList component", () => {
    render(<Home />);

    expect(
      screen.getByTestId("todo-list")
    ).toBeInTheDocument();
  });
});