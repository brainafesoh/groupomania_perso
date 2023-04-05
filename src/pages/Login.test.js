import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login Page", () => {
  it("should render login page correctly", () => {
    render(<Login />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
});
