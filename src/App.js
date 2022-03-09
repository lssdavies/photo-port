// importing react and state 
import React, { useState } from "react";
// importing all app components
import Nav from "./components/Nav";
import About from "./components/About";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

function App() {
  
  //lifting state up to apps so that it can be passed as props to Nav, Gallery or About
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);
  //setting the state, establish an array with a variable to store and set state
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          {/* ternary operator to determine what to render based on the state of contactSelected */}
          {!contactSelected ? (
            <>
              <Gallery currentCategory={currentCategory}></Gallery>
              <About></About>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

/** <> </> that wrap the Gallery and About components. Can you imagine what these are and what they might be for? They are called React fragments—a shorthand abbreviation for <React.Fragment></React.Fragment>.

They're a useful tool in React to allow multiple elements to be grouped together. Although in JSX you can only return a single parent element, this rule can be satisfied by wrapping the children components in a React fragment. This also allows you to wrap elements without creating extra DOM nodes, like wrapping with a <div> would do.  */
/* This ternary operator code is equivalent to the following conditional statement:
          if(!contactSelected) {
              <>
                <Gallery currentCategory={currentCategory}></Gallery>
                <About></About>
              </> 
            } else {
                <ContactForm></ContactForm>
            }*/
