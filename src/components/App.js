import React from 'react';
import recipeData from '../recipe_data.js'


const recipes = recipeData

class App extends React.Component {

  state = {
    recipes
  }

  render() {
    return(
      <div>
        <h1>RECIPES</h1>
        <p>{recipes[0].name}</p>
      </div>
    )
  }
}

export default App;
