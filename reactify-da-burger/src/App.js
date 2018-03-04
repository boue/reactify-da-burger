import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/lib/Button';
import Burger from './Burger/Burger';
var GifPlayer = require('react-gif-player');

class App extends Component {
  state = {
    burgers: [
      { name: 'Supreme', ingredients: 5 },
      { name: 'Veggie', ingredients: 3 },
      { name: 'Meat Lovers', ingredients: 8 }
    ]
  }

  switchBurgerHandler = (newName, newIngredients) => {
    this.setState({ 
      burgers: [
        { name: newName, ingredients: newIngredients }
      ],
      url: 'https://www196.lunapic.com/do-not-link-here-use-hosting-instead/152005072782434042?9754438899'
    })
  }

  resetBurgerHandler = () => {
    this.setState({ 
      burgers: [
        { name: 'yet to be made ', ingredients: 'no ' }
      ],
      url: 'https://www196.lunapic.com/do-not-link-here-use-hosting-instead/152005072782434042?9551986931'
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="page-title">Burger Shack</h1>
        {this.state.burgers.map(burger => {
          return <Burger 
            ingredients={burger.ingredients}
            name={burger.name} 
            onClick={this.switchBurgerHandler}
          />
        })}
        <Button 
          bsSize="large"
          bsStyle="danger"
          className="button"
          onClick={() => this.resetBurgerHandler()}>Cancel Order</Button> 
        <GifPlayer className="gif-item" gif={this.state.url} />
      </div>
    );
  }
}

export default App;
