import React from 'react';
import { useParams } from 'react-router-dom';
import sampleRecipes from '../sampleRecipes.js';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = sampleRecipes.find(recipe => recipe.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found!</p>;
  }

  // Split instructions into an array of steps
  const instructionsArray = recipe.instructions.split('\n').map(instruction => instruction.trim());

  return (
    <div className="recipe-detail">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <ol style={{ textAlign: 'left', paddingLeft: '0' }}>
        {instructionsArray.map((instruction, index) => (
          <li key={index} style={{ textAlign: 'center', listStylePosition: 'inside' }}>{instruction}</li>
        ))}
      </ol>
      <p><strong>Cooking Time:</strong> {recipe.cookingTime}</p>
    </div>
  );
};

export default RecipeDetail;
