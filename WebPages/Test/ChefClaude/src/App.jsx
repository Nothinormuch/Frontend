import Navbar from "./Components/Navbar.jsx";
import IngredientList from "./Components/IngredientList.jsx";
import Recipe from "./Components/Recipe.jsx";
import { useState, useRef, useEffect } from "react";
import genRecipe from "./ai.js";
export default () => {
  const [recipe, setRecipe] = useState("");

  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe && recipeSection.current) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <IngredientList
          genRecipe={genRecipe}
          setRecipe={setRecipe}
          ref={recipeSection}
        />
        <section className="recipe">
          {!(recipe === "") && <Recipe recipe={recipe} />}
        </section>
      </div>
    </>
  );
};
