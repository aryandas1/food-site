import recipes from './recipes.json';

const RecipeDetail = ({ id }) => {
    const recipe = recipes.find((r) => r.id === parseInt(id, 10));
    if (!recipe) return <h2 className="text-center text-red-500">Recipe not found</h2>;

    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
            <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-64 object-cover rounded-md mb-4" />
            <p className="text-lg text-gray-700 mb-4">{recipe.description}</p>

            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc pl-5 mb-4">
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-700">{ingredient}</li>
                ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Steps</h2>
            <ol className="list-decimal pl-5">
                {recipe.steps.map((step, index) => (
                    <li key={index} className="text-gray-700 mb-1">{step}</li>
                ))}
            </ol>

            {/* Reviews Section */}
            <h2 className="text-2xl font-semibold mt-6 mb-2">Reviews</h2>
            {recipe.reviews && recipe.reviews.length > 0 ? (
                <div className="space-y-4">
                    {recipe.reviews.map((review, index) => (
                        <div key={index} className="border rounded-lg p-4 shadow-sm">
                            <p className="text-gray-800">{review.blurb}</p>
                            <p className="text-yellow-500 font-bold">Rating: {review.rating} / 5</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No reviews yet. Be the first to add one!</p>
            )}
        </div>
    );
};

export default RecipeDetail;