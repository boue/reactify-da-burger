import React, { Component } from 'react';
import './App.css';
import Burger from './Burger/Burger';

class App extends Component {
  state = {
    burgers: [
      { name: 'Supreme', ingredients: 5 }
    ]
  }

  switchBurgerHandler = (newName, newIngredients) => {
    this.setState({ 
      burgers: [
        { name: newName, ingredients: newIngredients }
      ]
    })
  }

  resetBurgerHandler = () => {
    this.setState({ 
      burgers: [
        { name: 'yet to be made ', ingredients: 'no ' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a Burger Making App</h1>
        <button onClick={() => this.switchBurgerHandler('Veggie ', '5')} >I'm Vegeterian</button>
        <Burger
          click={() => this.resetBurgerHandler()} 
          ingredients={this.state.burgers[0].ingredients}
          name={this.state.burgers[0].name}  
        > EW </Burger>
      </div>
    );
  }
}

export default App;
