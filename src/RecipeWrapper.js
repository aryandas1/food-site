import { useParams } from 'react-router-dom';
import RecipeDetail from './RecipeDetail';

const RecipeWrapper = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) {
    return <h2 className="text-center text-red-500">Recipe not found</h2>;
  }

  return <RecipeDetail recipe={recipe} />;
};

export default RecipeWrapper;
