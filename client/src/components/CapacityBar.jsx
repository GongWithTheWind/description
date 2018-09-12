import React from 'react';

const CapacityBar = ({ guests, beds, bathrooms }) => {
  return(
    <div>
      <span> {guests} guests</span>
      <span> bedrooms</span>
      <span> beds</span>
      <span> {bathrooms} baths</span>
    </div>
    // add conditions for plural
  )
};

export default CapacityBar;