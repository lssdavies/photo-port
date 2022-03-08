import React, {useEffect} from 'react';
import { capitalizeFirstLetter } from '../../assets/utils/helpers';


  function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  /*The first argument is the callback function, and the second argument is an array with a single element, currentCategory. The second argument directs the hook to re-render the component on changes to the value of this state. In other words, if currentCategory changes now, the component will re-render so that the change in document.title will be visible to the user.*/
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        {/* a data-testid is used for tests */}
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            {/* a data-testid is used for tests */}
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {/*mapping over the array to get category names */}
          {categories.map((category) => (
            /*short-circuit expression means that currentCategory.name === category.name will get evaluated, and as long as it is true, then the second bit of the short circuit, navActive, will be returned.*/
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              {/* important; wrap function declaration rather than just calling categorySelected(category.name), which would cause the function to get called whenever the component renders as well. */}
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;