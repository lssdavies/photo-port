import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";

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
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          {/*passing the current category, which is the category selected by the user, from the Gallery component in App.js*/}
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
