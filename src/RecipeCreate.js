import React, { useState } from "react";
import './RecipeCreate.css'

function RecipeCreate(props) {

  const initialFormState = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: ''
  };

  const [recipe, setRecipe] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let field in recipe) {
      if (!recipe[field]) {
        alert(`Please fill in the ${field} field.`);
        return;
      }
    }

    props.onAddRecipe(recipe);

    setRecipe(initialFormState);
  }

  return (
    <form name="create" className="form-group" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input name="name" value={recipe.name} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="cuisine">Cuisine:</label>
        <input name="cuisine" value={recipe.cuisine} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="photo">Photo URL:</label>
        <input name="photo" value={recipe.photo} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea name="ingredients" value={recipe.ingredients} onChange={handleInputChange}></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="preparation">Preparation:</label>
        <textarea name="preparation" value={recipe.preparation} onChange={handleInputChange}></textarea>
      </div>
      <div className="form-group">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default RecipeCreate;
