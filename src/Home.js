import RecipeCard from './RecipeCard';
import React, { useState, useEffect } from 'react';

const Home = ({ setRecipesInParent }) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PRODUCTION_API_URL
    : process.env.REACT_APP_DEVELOPMENT_API_URL;
  console.log(apiUrl);
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        if (setRecipesInParent) {
          setRecipesInParent(data);
        }
      })
      .catch((error) => console.error('Error fetching recipes:', error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [apiUrl, setRecipesInParent]);

  const completedRecipes = recipes.filter(recipe => recipe.status === "completed");
  const plannedRecipes = recipes.filter(recipe => recipe.status === "planned");

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-gray-500">Loading recipes...</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-left">
        Welcome to Advika and Aryan's Food Website
      </h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Completed Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {completedRecipes.length > 0 ? (
            completedRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p className="text-gray-500">No completed recipes</p>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Planned Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {plannedRecipes.length > 0 ? (
            plannedRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p className="text-gray-500">No planned recipes</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
