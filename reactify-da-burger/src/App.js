import React, { Component } from 'react';
import './App.css';
import Burger from './Burger/Burger';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a Burger Making App</h1>
        <Burger name="Supreme" ingredients="5" />
      </div>
    );
  }
}

export default App;
