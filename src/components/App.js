import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      searchString: ''
    };
  }
  
  saveValue(data) {
      this.setState(data);
  }

  render() { 
    const recipes = this.recipes.filter(
      recipe => {
        const { searchString } = this.state;
        return recipe.title.includes(searchString) || recipe.ingredients.includes(searchString)
      }
    )
    const { searchString } = this.state;
    
    return (
      <div className="App">
        <Navbar searchString={searchString} callbeack={this.saveValue.bind(this)} />
        <div className="container mt-10">
          <div className="row">
             {recipes.map((item, i) => {
              return (
                <RecipeItem recipe={item} searchString={searchString} key={i} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
