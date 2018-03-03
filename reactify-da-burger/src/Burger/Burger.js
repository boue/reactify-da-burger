import React from 'react';

const burger = (props) => {
  return (
    <div>
      <p>This is the {props.name} burger and it contains {props.ingredients} ingredients!</p>
    </div> 
  );
}

export default burger;
