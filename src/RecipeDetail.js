import recipes from './recipes.json';

const RecipeDetail = ( {id} ) => {
    const recipe = recipes.find((r) => r.id === id);
    if (!recipe) {
        return <h2 className="text-center text-red-500">Recipe not found</h2>;
    }

    const calculateAverageRating = (reviews) => {
        if (!reviews || reviews.length === 0) return "No ratings yet";
        const total = reviews.reduce((sum, review) => sum + review.rating, 0);
        return (total / reviews.length).toFixed(1); // Rounded to 1 decimal place
    };

    const averageRating = calculateAverageRating(recipe.reviews);

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
            {/* Header Section */}
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

            {/* Recipe Details */}
            <div className="p-6">
                <p className="text-lg text-gray-700 mb-4">{recipe.description}</p>
                <p className="text-black-500 font-bold">Average Rating: {averageRating}</p>

                {/* Ingredients */}
                <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredients</h2>
                <ul className="list-disc pl-5 mb-6 space-y-1">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-700">{ingredient}</li>
                    ))}
                </ul>

                {/* Steps */}
                <h2 className="text-2xl font-semibold mb-2">Steps</h2>
                <ol className="list-decimal pl-5 space-y-4">
                    {recipe.steps.map((step, index) => (
                        <li key={index} className="text-gray-700">
                            <div className="flex items-start space-x-3">
                                <p>{step}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                {/* Reviews Section */}
                <h2 className="text-2xl font-semibold mt-6 mb-2">Reviews</h2>
                {recipe.reviews && recipe.reviews.length > 0 ? (
                    <div className="space-y-4">
                        {recipe.reviews.map((review, index) => (
                            <div key={index} className="border rounded-lg p-4 shadow-sm bg-gray-50">
                                <p className="text-gray-800">{review.blurb}</p>
                                <p className="text-yellow-500 font-bold">Rating: {review.rating} / 5</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No reviews yet. Be the first to add one!</p>
                )}
            </div>
        </div>
    );
};

export default RecipeDetail;
