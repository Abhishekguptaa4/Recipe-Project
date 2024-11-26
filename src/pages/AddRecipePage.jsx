import React from "react";
import "./../styles/AddRecipePage.css";

const AddRecipePage = () => {
  return (
    <div className="add-recipe-container">
      <h1>Add a New Recipe</h1>
      <p className="add-recipe-description">
        Share your favorite recipe with the world! Fill in the details below and upload a picture to get started.
      </p>
      <form className="add-recipe-form">
        <input type="text" placeholder="Recipe Name" required />
        <textarea
          placeholder="Ingredients Used (e.g., 2 cups flour, 1/2 tsp salt)"
          rows="3"
          required
        ></textarea>
        <textarea placeholder="Recipe Details" rows="5" required></textarea>
        <div className="file-input-container">
          <label htmlFor="recipe-image" className="file-label">
            Upload an Image
          </label>
          <input type="file" id="recipe-image" accept="image/*" />
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipePage;
