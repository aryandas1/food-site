const RecipeDetail = ({ recipe }) => {
    const calculateAverageRating = (reviews) => {
      if (!reviews || reviews.length === 0) return 'No ratings yet';
      const total = reviews.reduce((sum, review) => sum + review.rating, 0);
      return (total / reviews.length).toFixed(1);
    };
  
    const averageRating = calculateAverageRating(recipe.reviews);
  
    return (
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
        <div className="relative">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
            <h1 className="text-4xl font-bold text-white">{recipe.title}</h1>
          </div>
        </div>
  
        <div className="p-6">
          <p className="text-lg text-gray-700 mb-4">{recipe.description}</p>
          <p className="text-black-500 font-bold">
            Average Rating: {averageRating}
          </p>
  
          <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredients</h2>
          <ul className="list-disc pl-5 mb-6 space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">
                {ingredient}
              </li>
            ))}
          </ul>
  
          <h2 className="text-2xl font-semibold mb-2">Steps</h2>
          <ol className="list-decimal pl-5 space-y-4">
            {recipe.steps.map((step, index) => (
              <li key={index} className="text-gray-700">
                {step}
              </li>
            ))}
          </ol>
  
          <h2 className="text-2xl font-semibold mt-6 mb-2">Reviews</h2>
          {recipe.reviews && recipe.reviews.length > 0 ? (
            <div className="space-y-4">
              {recipe.reviews.map((review, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 shadow-sm bg-gray-50"
                >
                  <p className="text-gray-800">{review.blurb}</p>
                  <p className="text-yellow-500 font-bold">
                    Rating: {review.rating} / 5
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No reviews yet</p>
          )}
        </div>
      </div>
    );
  };
  
  export default RecipeDetail;
  