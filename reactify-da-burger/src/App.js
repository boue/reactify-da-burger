import React, { Component } from 'react';
import './App.css';
import Burger from './Burger/Burger';

class App extends Component {
  state = {
    burgers: [{ name: 'Supreme', ingredients: 5 }]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a Burger Making App</h1>
        <Burger 
          ingredients={this.state.burgers[0].ingredients}
          name={this.state.burgers[0].name}  
        />
      </div>
    );
  }
}

export default App;
