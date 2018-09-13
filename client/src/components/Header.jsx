import React from 'react';
import CapacityBar from './CapacityBar.jsx';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background: blue,
  color: red
`

const Header = ({ propertyType, name, location, owner, guests, beds, bathrooms }) => {
  return(
    <div>
      <StyledHeader>Header</StyledHeader>
      <div>{propertyType.toUpperCase()}</div>
      <div>{name}</div>
      <div>{location}</div>
      <img src={owner.image}></img>
      <div>{owner.name}</div>
      <CapacityBar guests={guests} beds={beds} bathrooms={bathrooms}/>
    </div>
  )
};

export default Header;