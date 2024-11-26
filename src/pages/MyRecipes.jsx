import React, { useState } from "react";
import Footer from "../components/Footer";
import "./../styles/MyRecipes.css";

// Import images using ES modules
import r1 from "../assets/kadaipaneer.jpeg";
import r2 from "../assets/soyamalaichap.jpeg";
import r3 from "../assets/chickencurry.jpeg";

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Kadai Paneer",
      description: "A spicy paneer dish.",
      image: r1,
      ingredients: "Paneer, Bell Peppers, Spices",
    },
    {
      id: 2,
      name: "Soya Malai Chaap",
      description: "A creamy soya chaap dish.",
      image: r2,
      ingredients: "Soya Chaap, Cream, Spices",
    },
    {
      id: 3,
      name: "Chicken Curry",
      description: "Aromatic and flavorful curry with tender chicken.",
      image: r3,
      ingredients: "Chicken, Onion, Tomato, Spices",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const handleEdit = (recipe) => {
    setSelectedRecipe(recipe);
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === selectedRecipe.id ? selectedRecipe : recipe
      )
    );
    setIsEditing(false);
    setSelectedRecipe(null);
  };

  return (
    <>
      <header className="header">
        <h1 className="my-recipes-heading">My Recipes</h1>
      </header>
      <div className="my-recipes-page">
        <div className="recipes-container">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.name} />
              <h3>{recipe.name}</h3>
              <p>
                <strong>Ingredients:</strong> {recipe.ingredients}
              </p>
              <p>{recipe.description}</p>
              <div className="recipe-actions">
                <button
                  onClick={() => handleEdit(recipe)}
                  className="update-button"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(recipe.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h2>Update Recipe</h2>
            <form onSubmit={handleSubmit} className="recipe-form">
              <label>
                Recipe Name:
                <input
                  type="text"
                  value={selectedRecipe.name}
                  onChange={(e) =>
                    setSelectedRecipe({
                      ...selectedRecipe,
                      name: e.target.value,
                    })
                  }
                />
              </label>
              <label>
                Ingredients:
                <textarea
                  value={selectedRecipe.ingredients}
                  onChange={(e) =>
                    setSelectedRecipe({
                      ...selectedRecipe,
                      ingredients: e.target.value,
                    })
                  }
                ></textarea>
              </label>
              <label>
                Recipe:
                <textarea
                  value={selectedRecipe.recipe}
                  onChange={(e) =>
                    setSelectedRecipe({
                      ...selectedRecipe,
                      recipe: e.target.value,
                    })
                  }
                ></textarea>
              </label>
              <label>
                Image:
                <input
                  type="file"
                  onChange={(e) =>
                    setSelectedRecipe({
                      ...selectedRecipe,
                      image: URL.createObjectURL(e.target.files[0]),
                    })
                  }
                />
              </label>
              <div className="modal-actions">
                <button type="submit" className="submit-button">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => {
                    setIsEditing(false);
                    setSelectedRecipe(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default MyRecipes;
