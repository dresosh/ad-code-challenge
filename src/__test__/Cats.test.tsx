import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Cats from "../Components/Cats";

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the main page", () => {
  render(<Cats />);
  expect(true).toBeTruthy();
});
