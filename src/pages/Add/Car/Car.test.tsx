import { fireEvent, render, screen } from "@testing-library/react";
import Car from "./Car";

test("Vehicle Name input should be rendered", () => {
  render(<Car />);
  const NameInput = screen.getByPlaceholderText(/Enter Vehicle Name/i);
  expect(NameInput).toBeInTheDocument();
});

test("Vehicle Color input should be rendered", () => {
  render(<Car />);
  const ColorInput = screen.getByPlaceholderText(/Enter Vehicle Color/i);
  expect(ColorInput).toBeInTheDocument();
});

test("button input should be rendered", () => {
  render(<Car />);
  const buttonInput = screen.getByRole("button");
  expect(buttonInput).toBeInTheDocument();
});

test("Vehicle Name input should be empty", () => {
  render(<Car />);
  const Nameinput: any = screen.getByPlaceholderText(/Enter Vehicle Name/i);
  expect(Nameinput.value).toBe("");
});

test("Vehicle Color input should be empty", () => {
  render(<Car />);
  const Nameinput: any = screen.getByPlaceholderText(/Enter Vehicle Color/i);
  expect(Nameinput.value).toBe("");
});

test("button input should be disabled", () => {
  render(<Car />);
  const buttonInput = screen.getByRole("button");
  expect(buttonInput).toBeDisabled();
});

test("loading should not be rendered", () => {
  render(<Car />);
  const Loader = screen.getByTestId("custom-loader");
  expect(Loader).not.toBeVisible();
});

test("loading should be rendered when clicked", () => {
  render(<Car />);
  const buttonInput = screen.getByRole("button");
  const colorInput = screen.getByPlaceholderText(/Enter Vehicle Color/i);
  const nameInput = screen.getByPlaceholderText(/Enter Vehicle Name/i);
  const Loader = screen.getByTestId("custom-loader");
  const testValue = "test";

  fireEvent.change(colorInput, {
    target: {
      value: testValue,
    },
  });

  fireEvent.change(nameInput, {
    target: {
      value: testValue,
    },
  });
  fireEvent.click(buttonInput);
  expect(Loader).toBeVisible();
});
