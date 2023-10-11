import React from "react";
import RecipeView from './RecipeView';

function RecipeList({ recipes, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Cuisine</th>
          <th>Photo</th>
          <th>Ingredients</th>
          <th>Preparation</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {recipes.map((recipe, index) => (
          <RecipeView 
              key={index} 
              recipe={recipe} 
              deleteRecipe={() => onDelete(index)}
          />
      ))}
      </tbody>
    </table>
  );
}

export default RecipeList;
