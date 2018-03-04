import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/lib/Button';
import Burger from './Burger/Burger';
var GifPlayer = require('react-gif-player');

class App extends Component {
  state = {
    burgers: [
      { id: '147852369', name: 'Supreme', ingredients: 5, price: 9 },
      { id: '369258147', name: 'Veggie', ingredients: 3, price: 6},
      { id: '789456123', name: 'Meat Lovers', ingredients: 8 , price: 12}
    ],
    showPrice: false
  }

  switchBurgerHandler = (newName, newIngredients) => {
    this.setState({ 
      burgers: [
        { name: newName, ingredients: newIngredients }
      ],
      url: 'https://www196.lunapic.com/do-not-link-here-use-hosting-instead/152005072782434042?9754438899'
    })
  }

  displayPriceHandler = (burgerIndex) => {
    this.setState({ showPrice: true })
  }

  render() {
    return (
      <div className="App">
        <h1 className="page-title">Burger Shack</h1>
        {this.state.burgers.map((burger, index) => {
          return (
            <div>
              <Burger 
              click={() => this.displayPriceHandler(index)}
              ingredients={burger.ingredients} 
              key={burger.id}
              name={burger.name} 
              onClick={this.switchBurgerHandler}
              />
              { this.state.showPrice ? <p>{this.state.burgers[index].price}</p> : null }
            </div>
          )
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
