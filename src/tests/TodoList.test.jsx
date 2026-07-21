import { render, screen } from "@testing-library/react";
import TodoList from "../components/todoList/TodoList";
import { useTodo } from "../context/TodoContext";

jest.mock("../context/TodoContext");

jest.mock("../components/todoItem/TodoItem", () => ({ todo }) => (
  <div data-testid="todo-item">{todo.title}</div>
));

describe("TodoList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should display empty state when there are no todos", () => {
    useTodo.mockReturnValue({
      todos: [],
      deleteTodo: jest.fn(),
      toggleComplete: jest.fn(),
      editTodo: jest.fn(),
    });

    render(<TodoList />);

    expect(
      screen.getByText("No Tasks Found")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Your dashboard is clear! Add some tasks to get started."
      )
    ).toBeInTheDocument();
  });

  test("should render one todo", () => {
    useTodo.mockReturnValue({
      todos: [
        {
          id: 1,
          title: "Learn React",
          completed: false,
        },
      ],
      deleteTodo: jest.fn(),
      toggleComplete: jest.fn(),
      editTodo: jest.fn(),
    });

    render(<TodoList />);

    expect(
      screen.getByText("Learn React")
    ).toBeInTheDocument();

    expect(
      screen.getAllByTestId("todo-item")
    ).toHaveLength(1);
  });

  test("should render multiple todos", () => {
    useTodo.mockReturnValue({
      todos: [
        {
          id: 1,
          title: "React",
          completed: false,
        },
        {
          id: 2,
          title: "Jest",
          completed: true,
        },
        {
          id: 3,
          title: "Context API",
          completed: false,
        },
      ],
      deleteTodo: jest.fn(),
      toggleComplete: jest.fn(),
      editTodo: jest.fn(),
    });

    render(<TodoList />);

    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Jest")).toBeInTheDocument();
    expect(screen.getByText("Context API")).toBeInTheDocument();

    expect(
      screen.getAllByTestId("todo-item")
    ).toHaveLength(3);
  });

  test("should not display empty state when todos exist", () => {
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

    render(<TodoList />);

    expect(
      screen.queryByText("No Tasks Found")
    ).not.toBeInTheDocument();
  });
});