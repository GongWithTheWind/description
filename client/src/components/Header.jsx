import React from 'react';
import CapacityBar from './CapacityBar.jsx';

const Header = ({ propertyType, name, location, owner, guests, beds, bathrooms }) => {
  return(
    <div>
      <h5>Header</h5>
      <div>{propertyType}</div>
      <div>{name}</div>
      <div>{location}</div>
      <img src={owner ? owner.image : ''}></img>
      <div>{owner ? owner.name : ''}</div>
      <CapacityBar guests={guests} beds={beds} bathrooms={bathrooms}/>
    </div>
  )
};

export default Header;