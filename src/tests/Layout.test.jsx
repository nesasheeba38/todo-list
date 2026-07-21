import { render, screen } from "@testing-library/react";
import Layout from "../components/layout/Layout";

jest.mock("../components/navbar/Navbar", () => () => (
  <div data-testid="navbar">
    Navbar Component
  </div>
));

jest.mock("react-router-dom", () => ({
  Outlet: () => (
    <div data-testid="outlet">
      Outlet Component
    </div>
  ),
}));

describe("Layout Component", () => {
  test("should render Navbar", () => {
    render(<Layout />);

    expect(
      screen.getByTestId("navbar")
    ).toBeInTheDocument();
  });

  test("should render Outlet", () => {
    render(<Layout />);

    expect(
      screen.getByTestId("outlet")
    ).toBeInTheDocument();
  });

  test("should render main content container", () => {
    const { container } = render(<Layout />);

    expect(
      container.querySelector(".main-content")
    ).toBeInTheDocument();
  });

  test("should render app wrapper", () => {
    const { container } = render(<Layout />);

    expect(
      container.querySelector(".app-wrapper")
    ).toBeInTheDocument();
  });
});