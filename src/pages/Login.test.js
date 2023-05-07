// import { render, screen } from "@testing-library/react";
import { render, screen } from "../test/customRender";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Login Page", () => {
  it("should render login page correctly", () => {
    render(<Login />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });

  it("should render an email input field with the label sitting inside it, but move out the label to the top of the input when user intents to fill it.", async () => {
    // const user = userEvent.setup();
    render(<Login />);
    const emailInputField = screen.getByLabelText("Email");
    const emailInputLabel = screen.getByText("Email", { selector: "label" });

    // Actually allows us to get the final CSS properties applied to the element
    // but can't help you get the x,y coordinates in reality on the page, which we absolutely need to determine if label moved out of the input
    const emailInputFieldStyle = getComputedStyle(emailInputField);
    expect(emailInputFieldStyle.visibility).toBe("visible");

    // Trying to test that the label lies inside the input.
    // Doesn't work as in reality the renderer is not rendering a full page but rather just the dom
    // An alternative could be to do something with a headless browser like puppeteer.
    const emailInputFieldRect = emailInputField.getBoundingClientRect();
    const emailInputLabelRect = emailInputLabel.getBoundingClientRect();
    expect(
      emailInputFieldRect.left < emailInputLabelRect.left &&
        emailInputFieldRect.right > emailInputLabelRect.right &&
        emailInputFieldRect.top < emailInputLabelRect.top &&
        emailInputFieldRect.bottom > emailInputLabelRect.bottom
    ).toBe(true);
    // await user.click(emailInputField);
  });
});
