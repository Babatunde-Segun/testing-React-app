import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders post if request succeeds", async () => {
    // Arrange
    render(<Async />);

    // Assertion
    const listItemEl = await screen.findAllByRole("list");
    expect(listItemEl).not.toHaveLength(0);
  });
});
