import React, { Component } from 'react';
import './App.css';
import Burger from './Burger/Burger';

class App extends Component {
  state = {
    burgers: [{ name: 'Supreme', ingredients: 5 }]
  }

  switchBurgerHandler = () => {
    this.setState({ 
      burgers: [
        { name: 'yet to be made ', ingredients: 0}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a Burger Making App</h1>
        <button onClick={this.switchBurgerHandler} >Start Over</button>
        <Burger 
          ingredients={this.state.burgers[0].ingredients}
          name={this.state.burgers[0].name}  
        />
      </div>
    );
  }
}

export default App;
