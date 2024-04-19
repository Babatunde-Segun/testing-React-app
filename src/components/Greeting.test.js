import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

// describe function are used to create test suites are group of tests related to a component or function so as to make things easier
describe("Greeting component", () => {
  // Basically we want to do three things when we write a test by using three's A
  // 1) Arrange: Set up the test data, test environment
  //  2) Act: Run logic that should be tested( eg execute function)
  // 3) Assert: Compare execution result with expectated result

  // test is a global function which take two arguments, first the description and a anonymous function to be executed
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // basically nothing for no

    // Assert
    const helloWorld = screen.getByText("Hello World", { exact: false });
    expect(helloWorld).toBeInTheDocument();
  });

  test("render Happy to see you as a text was not clicked", () => {
    // arrange
    render(<Greeting />);

    // act
    // nothing

    // Assert
    const happyToSeeText = screen.getByText("Happy to see you", {
      exact: false,
    });
    expect(happyToSeeText).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    // arrange
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders happy to see you  when the button was clicked", () => {
    // act
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const happyToSeeText = screen.queryByText("happy to see you", {
      exact: false,
    });
    expect(happyToSeeText).toBeNull();
  });
});
