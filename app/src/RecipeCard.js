import { Link } from 'react-router-dom';


// function getAverageRating(recipe) {
//   const reviews = recipe.reviews;
//   console.log("Recipe id", recipe.id);
//   console.log("Number of reviews for recipe: ", recipe.id, ". Length: ", reviews.length)
//   if (reviews.length === 0) {
//     return "No reviews available"; // Handle case when there are no reviews
//   }
//   let totalRating = recipe.rating;

//   if (reviews.length > 1) {
//     totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
//   }

//   console.log("Avg Rating: ", totalRating / reviews.length)
//   return totalRating / reviews.length;
// }

const ratingCache = {};

// Function to calculate average rating with caching
function getAverageRating(recipe) {
  // Check if the average rating is already cached
  if (ratingCache[recipe.id]) {
    return ratingCache[recipe.id];  // Return cached value if available
  }

  const reviews = recipe.reviews;

  // Check if reviews array is empty
  if (reviews.length === 0) {
    return "No reviews available"; // Handle case when there are no reviews
  }

  // Calculate total rating and average
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const avgRating = totalRating / reviews.length;

  // Cache the computed average rating
  ratingCache[recipe.id] = avgRating;

  console.log(ratingCache);

  // return avgRating;
}

const RecipeCard = ({ recipe }) => (
  <div className="border rounded-lg shadow-md p-4">
    <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-40 object-cover rounded-md" />
    <h3 className="text-xl font-semibold mt-2">{recipe.title}</h3>
    <p className="text-gray-600">{recipe.description}</p>
    <p className="text-green-500 font-bold">{ratingCache[recipe.id]}</p>
    <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline mt-2 block">View Recipe</Link>
  </div>
);

export default RecipeCard;