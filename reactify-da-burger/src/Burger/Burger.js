import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import './Burger.css';

const burger = (props) => {
  return (
    <div className="Burger">
      <p>This is the {props.name} burger and it contains {props.ingredients} ingredients!</p>
      <Button 
        bsSize="large"
        bsStyle="success" 
        className="button"
        onClick={() => this.switchBurgerHandler('Veggie ', '5')} 
      >Order {props.name}</Button>
    </div> 
  );
}

export default burger;
