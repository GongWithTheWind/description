import React from 'react';

const pluralize = (category, quantity) => {
  return quantity > 1 ? quantity.toString().concat(' ', category, 's') : quantity.toString().concat(' ', category); 
};

const CapacityBar = ({ guests, beds, bathrooms }) => {
  return(
    <div>
      <span> {pluralize('guest', guests)}</span>
      <span> {pluralize('bedroom', beds.bedrooms.length)}</span>
      <span> {pluralize('bed', beds.bedrooms.reduce((accum, current) => { return accum + current.length; }, 0))}</span>
      <span> {pluralize('bathroom', bathrooms)}</span>
    </div>
  )
};

export default CapacityBar;