// // see notes from about index.tests.js
// import React from "react";
// import { render, cleanup } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import Nav from "..";

// // test updated to handle props for the Nav, we need to add the categories array as well as following mock functions 
// const categories = [
//   { name: 'portraits', description: 'Portraits of people in my life' }
// ]
// const mockCurrentCategory = jest.fn();
// const mockSetCurrentCategory = jest.fn();
// const mockContactSelected = jest.fn();
// const mockSetContactSelected = jest.fn();

//  afterEach(cleanup);

// Nav test currently broken
//   describe("Nav component", () => {
//     // // baseline test
//     // it("renders", () => {
//     //   render(<Nav />);
//     // });
//     //it function to test props
//     it('renders', () => {
//       render(<Nav
//         categories={categories}
//         setCurrentCategory={mockSetCurrentCategory}
//         currentCategory={mockCurrentCategory}
//         contactSelected={mockContactSelected}
//         setContactSelected={mockSetContactSelected}
//       />);
//     })

//     // snapshot test if snapshot test start failingbe sure to press u to update snapshots
//     it('matches snapshot', () => {
//     const { asFragment } = render(<Nav />);
//     // assert value comparison
//     expect(asFragment()).toMatchSnapshot();
//   });
// })

// //Test for Emoji Visibility
// describe("emoji is visible", () => {
//   it("inserts emoji into the h2", () => {
//     const { getByLabelText } = render(<Nav />);

//     // assert value comparison
//     expect(getByLabelText("camera")).toHaveTextContent("📸");
//   });
// });

// //Test for Link Visibility
// describe("links are visible", () => {
//     it('inserts text into the links', ()=>  {
//       /*getTestId looks for the data-testid in the nav components that were added to <a>tag <a data-testid=link> <a data-testid=about>*/
//       const { getByTestId } = render(<Nav />);
      
//       //2 expects are used to assert to test both links, if either fails the entire test will fail
//       expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
//       expect(getByTestId("about")).toHaveTextContent("About me");
//     })
// })