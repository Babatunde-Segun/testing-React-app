import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders post if request succeeds", async () => {
    // mock function
    window.fetch = jest.fn();

    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });
    // Arrange
    render(<Async />);

    // Assertion
    const listItemEl = await screen.findAllByRole("list");
    expect(listItemEl).not.toHaveLength(0);
  });
});
