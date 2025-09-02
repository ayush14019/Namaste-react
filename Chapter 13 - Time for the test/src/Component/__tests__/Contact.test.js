import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// we can also group multipe nested describe inside describe

describe("Contact Us page Case", () => {

  // beforeAll(()=>{
  //   console.log("Before all")
  // })
  // beforeEach(()=>{
  //   console.log("Before Each")
  // })

  // afterAll(() => {
  //   console.log("After all");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });



  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load button in contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);
    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //   console.log(inputBoxes.length);

    // assertion
    //   expect(inputBoxes.length).not.toBe(3);
    expect(inputBoxes.length).toBe(2);
  });
});
