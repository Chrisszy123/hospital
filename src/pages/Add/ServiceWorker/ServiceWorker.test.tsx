import { render, screen } from "@testing-library/react";
import Inspection from "./ServiceWorker";

test("Wallet Address input should be rendered", () => {
  render(<Inspection />);
  const NameInput = screen.getByPlaceholderText(
    /Enter Wallet Address of Service Worker/i
  );
  expect(NameInput).toBeInTheDocument();
});

test("button input should be rendered", () => {
  render(<Inspection />);
  const buttonInput = screen.getByRole("button");
  expect(buttonInput).toBeInTheDocument();
});

test("Wallet Address input should be empty", () => {
  render(<Inspection />);
  const NameInput: any = screen.getByPlaceholderText(
    /Enter Wallet Address of Service Worker/i
  );
  expect(NameInput.value).toBe("");
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
