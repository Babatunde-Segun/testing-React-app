import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

// Basically we want to do three things when we write a test by using three's A
// 1) Arrange: Set up the test data, test environment
//  2) Act: Run logic that should be tested( eg execute function)
// 3) Assert: Compare execution result with expectated result

// test is a global function which take two arguments, first the description and a anonymous function to be executed
test("renders Hello World as a text", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // basically nothing for now

  // Assert
  const helloWorld = screen.getByText("Hello World", { exact: true });
  expect(helloWorld).toBeInTheDocument();
});
