import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useTodo } from "../context/TodoContext";

jest.mock("../context/TodoContext");

describe("Navbar", () => {
  const mockToggleTheme = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useTodo.mockReturnValue({
      theme: "light",
      toggleTheme: mockToggleTheme,
    });
  });

  test("should render application logo", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(
      screen.getByText("TodoListApp")
    ).toBeInTheDocument();
  });

  test("should render all navigation links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", {
        name: /home/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /add todo/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /completed/i,
      })
    ).toBeInTheDocument();
  });

  test("should navigate to Home page", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", {
        name: /home/i,
      })
    ).toHaveAttribute("href", "/");
  });

  test("should navigate to Add Todo page", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", {
        name: /add todo/i,
      })
    ).toHaveAttribute("href", "/add");
  });

  test("should navigate to Completed page", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("link", {
        name: /completed/i,
      })
    ).toHaveAttribute("href", "/completed");
  });

  test("should call toggleTheme when theme button is clicked", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const themeButton = screen.getByRole("button", {
      name: /toggle theme/i,
    });

    await user.click(themeButton);

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  test("should display dark mode icon when theme is light", () => {
    useTodo.mockReturnValue({
      theme: "light",
      toggleTheme: mockToggleTheme,
    });

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("button", {
        name: /toggle theme/i,
      })
    ).toBeInTheDocument();
  });

  test("should display light mode icon when theme is dark", () => {
    useTodo.mockReturnValue({
      theme: "dark",
      toggleTheme: mockToggleTheme,
    });

    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("button", {
        name: /toggle theme/i,
      })
    ).toBeInTheDocument();
  });
});