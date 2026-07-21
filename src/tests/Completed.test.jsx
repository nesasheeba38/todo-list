import { render, screen } from "@testing-library/react";
import Completed from "../pages/Completed";
import { useTodo } from "../context/TodoContext";

jest.mock("../context/TodoContext");

jest.mock("../components/todoList/TodoList", () => ({ todos = [] }) => (
  <div data-testid="todo-list">
    {todos.map((todo) => (
      <p key={todo.id}>{todo.title}</p>
    ))}
  </div>
));

describe("Completed Component", () => {
  beforeEach(() => {
    useTodo.mockReturnValue({
      todos: [
        {
          id: 1,
          title: "React",
          completed: true,
        },
        {
          id: 2,
          title: "Jest",
          completed: false,
        },
        {
          id: 3,
          title: "JavaScript",
          completed: true,
        },
      ],
      deleteTodo: jest.fn(),
      toggleComplete: jest.fn(),
      editTodo: jest.fn(),
    });
  });

  test("should render page title", () => {
    render(<Completed />);

    expect(
      screen.getByRole("heading", {
        name: /completed tasks/i,
      })
    ).toBeInTheDocument();
  });

  test("should render page description", () => {
    render(<Completed />);

    expect(
      screen.getByText(
        "A historical log of all tasks you have checked off."
      )
    ).toBeInTheDocument();
  });

  test("should display only completed todos", () => {
    render(<Completed />);

    expect(
      screen.getByText("React")
    ).toBeInTheDocument();

    expect(
      screen.getByText("JavaScript")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Jest")
    ).not.toBeInTheDocument();
  });

  test("should render TodoList component", () => {
    render(<Completed />);

    expect(
      screen.getByTestId("todo-list")
    ).toBeInTheDocument();
  });

  test("should render empty TodoList when no completed todos exist", () => {
    useTodo.mockReturnValue({
      todos: [],
      deleteTodo: jest.fn(),
      toggleComplete: jest.fn(),
      editTodo: jest.fn(),
    });

    render(<Completed />);

    expect(
      screen.getByTestId("todo-list")
    ).toBeInTheDocument();

    expect(
      screen.queryByText("React")
    ).not.toBeInTheDocument();
  });
});