import React from "react";

// importing testing functions from React Testing Library
import { render, cleanup } from "@testing-library/react";
/*render function "render" the component. Jest creates a simulated DOM in a Node.js environment to approximate the DOM(no component is actually visibly rendered)
cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results
*/
//import the extend-expect library from the jest-dom package
import "@testing-library/jest-dom/extend-expect";
//importing About component to test
import About from "..";

//calling cleaning up function to ensure after each test there is no leftover data that could cause test to fail
afterEach(cleanup);

//describe function to declare the component we're testing and the call back functgion with the test
describe("About component", () => {
  // First Test is baseline test
  it("renders", () => {
    render(<About />);
  });
  /**The it function is used but IT and TEST can be used interchangeably. In the first argument, a string declares what is being tested. In the second argument, a callback function runs the test.*/

  // Second Test / Test case
  //it function passing test message
  it("matches snapshot DOM node structure", () => {
    //the callback function in the test case uses the asFragment function, which returns a snapshot of the About component.
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
  });
});