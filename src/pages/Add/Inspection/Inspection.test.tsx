import { render, screen } from "@testing-library/react";
import Inspection from "./TechnicalInspection";

test("Vehicle Name input should be rendered", () => {
  render(<Inspection />);
  const NameInput = screen.getByDisplayValue(/Select Vehicle for Inspection/i);
  expect(NameInput).toBeInTheDocument();
});

test("button input should be rendered", () => {
  render(<Inspection />);
  const buttonInput = screen.getByRole("button");
  expect(buttonInput).toBeInTheDocument();
});

test("Vehicle Name input should be empty", () => {
  render(<Inspection />);
  const NameInput: any = screen.getByDisplayValue(
    /Select Vehicle for Inspection/i
  );
  expect(NameInput.value).toBe("DEFAULT");
});

test("button input should be disabled", () => {
  render(<Inspection />);
  const buttonInput = screen.getByRole("button");
  expect(buttonInput).toBeDisabled();
});

test("loading should not be rendered", () => {
  render(<Inspection />);
  const Loader = screen.getByTestId("custom-loader");
  expect(Loader).not.toBeVisible();
});
