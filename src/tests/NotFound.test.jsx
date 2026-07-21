import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

describe("NotFound Component", () => {
  const renderComponent = () =>
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

  test("should render 404 heading", () => {
    renderComponent();

    expect(
      screen.getByRole("heading", {
        name: "404",
      })
    ).toBeInTheDocument();
  });

  test("should render page not found heading", () => {
    renderComponent();

    expect(
      screen.getByRole("heading", {
        name: /page not found/i,
      })
    ).toBeInTheDocument();
  });

  test("should render description message", () => {
    renderComponent();

    expect(
      screen.getByText(
        "Oops! The page you are looking for doesn't exist or has been moved."
      )
    ).toBeInTheDocument();
  });

  test("should render Go Back Home link", () => {
    renderComponent();

    const homeLink = screen.getByRole("link", {
      name: /go back home/i,
    });

    expect(homeLink).toBeInTheDocument();
  });

  test("should navigate to home route", () => {
    renderComponent();

    const homeLink = screen.getByRole("link", {
      name: /go back home/i,
    });

    expect(homeLink).toHaveAttribute("href", "/");
  });
});