import recipes from './recipes.json'
import RecipeCard from './RecipeCard';
const Home = () => (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Advika and Aryan's Food Website</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
export default Home;