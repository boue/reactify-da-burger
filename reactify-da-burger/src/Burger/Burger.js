import React from 'react';

const burger = (props) => {
  return ( 
    <p>This is the {props.name} burger and it contains {props.ingredients} ingredients!</p>
  );
}

export default burger;
