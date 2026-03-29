import Navbar from "./Components/Navbar.jsx";
import IngredientList from "./Components/IngredientList.jsx";
import Recipe from "./Components/Recipe.jsx";
import { useState } from "react";
import genRecipe from "./ai.js";
export default () => {
  const [recipe, setRecipe] = useState("");

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <IngredientList genRecipe={genRecipe} setRecipe={setRecipe} />
        <section className="recipe">
          {!(recipe === "") && <Recipe recipe={recipe} />}
        </section>
      </div>
    </>
  );
};
