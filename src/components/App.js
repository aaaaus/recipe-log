import React from 'react';

import RecipeList from './RecipeList'
import recipeData from '../recipe_data.js'

const recipes = recipeData

class App extends React.Component {

  state = {
    recipes
  }

  render() {
    return(
      <div>
        <RecipeList
          recipes={this.state.recipes}
        />
      </div>
    )
  }
}

export default App;
