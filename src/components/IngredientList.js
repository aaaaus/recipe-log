import React from 'react';

const IngredientList = (props) => {

  console.log("IngredientList props are: ", props);

  const listedIngredients = props.ingredients.map(ingredient => ingredient.name)

  return (
    <div id="ingredient-list">
      {listedIngredients.join(" ")}
    </div>
  )

}

export default IngredientList;
