import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return "No ratings yet";
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1); // Rounded to 1 decimal place
  };

  const averageRating = calculateAverageRating(recipe.reviews);

  return (
    <Link
      to={`/recipe/${recipe.id}`}
      className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 block"
    >
      <div>
        <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-100 object-cover rounded-md" />
        <h3 className="text-xl font-semibold mt-2">{recipe.title}</h3>
        <p className="text-gray-600">{recipe.description}</p>
        <p className="text-black-500 font-bold mt-2">Rating: {averageRating}</p>
      </div>
    </Link>
  );
};

export default RecipeCard;