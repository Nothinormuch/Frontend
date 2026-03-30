import { useState } from "react";
export default ({ genRecipe, setRecipe, ref }) => {
  const [errorCode, setErrorCode] = useState(0);
  const [ingredients, setIngredients] = useState(["potatoes", "onions", "oil"]);
  function addIngredient(formData) {
    const data = formData.get("ingredient");
    if (data === "") {
      setErrorCode(1);
    } else {
      setIngredients((prevArr) => {
        return [...prevArr, data];
      });
    }
  }

  function errorCodeToMessage(errorCode) {
    switch (errorCode) {
      case 0:
        return "Ok";
      case 1:
        return "Ingredient Missing!";
      default:
        return "Invalid Ingredient";
    }
  }
  return (
    <>
      <form action={addIngredient}>
        <input
          id="ingredient-prompt"
          name="ingredient"
          type="text"
          className={"prompt" + (errorCode > 0 ? " error" : "")}
          placeholder="e.g. potatoes"
          aria-label="Add ingredient"
          onKeyDown={(e) => {
            if (e.key != "Enter") {
              setErrorCode(0);
            }
          }}
        />
        <button type="submit" className="prompt-submit">
          Add ingredient
        </button>
      </form>
      {errorCode > 0 && (
        <p className="error-message">{errorCodeToMessage(errorCode)}</p>
      )}
      {ingredients.length > 0 && (
        <div className="ingredient-list">
          <h2>Ingredients on hand:</h2>
          <ul>
            {ingredients.map((i) => {
              return <li key={i}>{i}</li>;
            })}
          </ul>
        </div>
      )}
      {ingredients.length > 2 && (
        <div ref={ref} className="recipe-suggession-container">
          <div className="recipe-suggession-text">
            <h2>Ready for a recipe?</h2>
            <span>Generate a recipe from your list of ingredients.</span>
          </div>
          <button
            onClick={async function () {
              setRecipe(await genRecipe(ingredients));
            }}
          >
            Get a recipe
          </button>
        </div>
      )}
    </>
  );
};
