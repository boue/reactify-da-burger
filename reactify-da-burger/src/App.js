import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/lib/Button';
import Burger from './Burger/Burger';
var GifPlayer = require('react-gif-player');

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
        <h1 className="page-title">Burger Making App</h1>
        <Button 
          bsSize="large"
          bsStyle="success" 
          className="button"
          onClick={() => this.switchBurgerHandler('Veggie ', '5')} 
        >I'm Vegeterian</Button>
        <Button 
          bsSize="large"
          bsStyle="danger"
          className="button"
          onClick={() => this.resetBurgerHandler()}>EW</Button> 
        <Burger
          ingredients={this.state.burgers[0].ingredients}
          name={this.state.burgers[0].name}  
        />
        <GifPlayer className="gif-item" gif={this.state.url} />
      </div>
    );
  }
}

export default App;
