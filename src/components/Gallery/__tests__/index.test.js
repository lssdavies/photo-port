import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'



/* Gallery component will also require a prop of currentCategory. Rather than taking it from the App component, we're going to mock it out at the top of our file.*/
const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

describe('Gallery is rendering', () => {

  it('renders', () => {
    render(<Gallery currentCategory={portrait} />);
  });
  
})

// snapshot test if snapshot test start failing be sure to press u to update snapshots
it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />)
    expect(asFragment()).toMatchSnapshot()
  })

// test to make sure that the title of our <h1> is Portraits
it('renders', () => {
    const { getByTestId } = render(<Gallery currentCategory={portrait} />)
    expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
  })
//This 
//   describe('PhotoList is rendering', () => {
//     it('renders', () => {
//       render(<PhotoList />);
//     });
  
//     it('renders', () => {
//       const { asFragment } = render(<PhotoList />)
//       expect(asFragment()).toMatchSnapshot()
//     });
//   });