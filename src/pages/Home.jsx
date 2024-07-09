import React from 'react';
import { Link } from 'react-router-dom';
import sampleRecipes from '../sampleRecipes'; // Assuming sampleRecipes.js is correctly imported and contains the recipes data

const Home = () => {
  const types = ['Continental', 'Thai', 'Chinese'];

  // Use sampleRecipes data to populate topRecipes
  const topRecipes = sampleRecipes.slice(0, 3); // Assuming you want to show the first 3 recipes as top recipes

  return (
    <div className="home">
      <h1>Welcome to Recipe Hub</h1>
      <p className="description">
        Welcome to Recipe Hub, where culinary exploration meets delicious satisfaction. Discover a world of flavors with our curated collection of recipes from around the globe. Whether you crave the comforting richness of Continental cuisine, the aromatic spices of Thai delicacies, or the bold flavors of Chinese dishes, we have something to tantalize every palate. Explore, cook, and savor your way to culinary perfection with Recipe Hub!
      </p>
      <h2>Categories</h2>
      <ul className="food-types">
        {types.map((type, index) => (
          <li key={index}>
            <Link to={`/type/${type.toLowerCase()}`}>{type}</Link>
          </li>
        ))}
      </ul>
      <h2>Top Rated Recipes</h2>
      <div className="top-recipes">
        {topRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
