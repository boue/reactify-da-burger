import React from 'react';
import './Burger.css';

const burger = (props) => {
  return (
    <div className="Burger">
      <p>This is the {props.name} burger and it contains {props.ingredients} ingredients!</p>
    </div> 
  );
}

export default burger;
