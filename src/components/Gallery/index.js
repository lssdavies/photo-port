import React from "react";
//importing capitalize first letter function from utils
import { capitalizeFirstLetter } from "../../assets/utils/helpers";
//importing Photolist
import PhotoList from "../Photolist/index";

//Gallery Component receiving currentCategory as prop from App.js
function Gallery({ currentCategory }) {
  //deconstructing currentCategory to pull out name and description
  const { name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      <p>{description}</p>
      {/*pass down the currentCategory.name to prop into the Photolist component from Gallery */}
      <PhotoList category={currentCategory.name} />
    </section>
  );
}

export default Gallery;