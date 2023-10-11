import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipes,index) => index !== indexToDelete)
    );
  }
  const addRecipe = (newRecipe) => {
    setRecipes(prevRecipes => [...prevRecipes, newRecipe]);
  };

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} onDelete={deleteRecipe} />
      <RecipeCreate onAddRecipe={addRecipe} />
    </div>
  );
}

export default App;
