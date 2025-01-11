import RecipeDetail from "./RecipeDetail";
const RecipeWrapper = ({ ...props }) => {
    const id = window.location.pathname.split("/").pop();
    return <RecipeDetail id={id} {...props} />;
  };

export default RecipeWrapper;