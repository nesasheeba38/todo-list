import { render, screen } from "@testing-library/react";
import TodoStats from "../components/TodoStats/TodoStats";

describe("TodoStats", () => {
  test("should display zero values when there are no todos", () => {
    render(<TodoStats todos={[]} />);

    expect(screen.getByText("Total Tasks")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getByText("Pending")).toBeInTheDocument();

    expect(screen.getByText("0%")).toBeInTheDocument();
  });

  test("should display correct total, completed and pending todos", () => {
    const todos = [
      {
        id: 1,
        title: "Learn React",
        completed: true,
      },
      {
        id: 2,
        title: "Learn Jest",
        completed: false,
      },
      {
        id: 3,
        title: "Learn Context",
        completed: false,
      },
    ];

    render(<TodoStats todos={todos} />);

    expect(screen.getByText("3")).toBeInTheDocument(); // Total
    expect(screen.getByText("1")).toBeInTheDocument(); // Completed
    expect(screen.getByText("2")).toBeInTheDocument(); // Pending
  });

  test("should display correct completion percentage", () => {
    const todos = [
      {
        id: 1,
        title: "Task 1",
        completed: true,
      },
      {
        id: 2,
        title: "Task 2",
        completed: true,
      },
      {
        id: 3,
        title: "Task 3",
        completed: false,
      },
      {
        id: 4,
        title: "Task 4",
        completed: false,
      },
    ];

    render(<TodoStats todos={todos} />);

    expect(screen.getByText("50%")).toBeInTheDocument();
  });

  test("should display 100% when all todos are completed", () => {
    const todos = [
      {
        id: 1,
        title: "React",
        completed: true,
      },
      {
        id: 2,
        title: "Jest",
        completed: true,
      },
    ];

    render(<TodoStats todos={todos} />);

    expect(screen.getByText("100%")).toBeInTheDocument();
  });

  test("should display 0% when no todos are completed", () => {
    const todos = [
      {
        id: 1,
        title: "React",
        completed: false,
      },
      {
        id: 2,
        title: "Jest",
        completed: false,
      },
    ];

    render(<TodoStats todos={todos} />);

    expect(screen.getByText("0%")).toBeInTheDocument();
  });
});