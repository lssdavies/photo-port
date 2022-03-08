import React from 'react';

function Nav()  {
    //define categories to use with .map() method so as to make component DRY
    const categories = [
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
      ];

      function categorySelected(name) {
        console.log(`${name} clicked`)
      }

    return (
        <header className=''>
            <h2>
    <a href="/">
      <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
      {/*mapping over the array to get category names */}
      {categories.map((category) => (
  <li
    className="mx-1"
    key={category.name}
  >
      {/* important wrap function declaration rather than just calling categorySelected(category.name), which would cause the function to get called whenever the component renders as well. */}
    <span onClick={() => categorySelected(category.name)} >
      {category.name}
    </span>
  </li>
))}
    </ul>
  </nav>
        </header>
    )
}

export default Nav;