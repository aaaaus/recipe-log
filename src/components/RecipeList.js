import React from 'react';

import IngredientList from './IngredientList'

class RecipeList extends React.Component {

  render() {

    const recipes = this.props.recipes.map(recipe => {
      return (
        <div>
          <div>{recipe.name}</div>
          <IngredientList ingredients={recipe.ingredients}/>
        </div>
      )
    })

    return (
      <div id="recipe-list">
        {recipes}
      </div>
    )
  }

}

export default RecipeList;
