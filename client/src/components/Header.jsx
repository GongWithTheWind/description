import React from 'react';
import CapacityBar from './CapacityBar.jsx';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background: blue,
  color: red
`

const Header = ({ propertyType, name, location, owner, guests, beds, bathrooms }) => {
  return(
    <StyledHeader>
      <h5>Header</h5>
      <div>{propertyType}</div>
      <div>{name}</div>
      <div>{location}</div>
      <img src={owner.image}></img>
      <div>{owner.name}</div>
      <CapacityBar guests={guests} beds={beds} bathrooms={bathrooms}/>
    </StyledHeader>
  )
};

export default Header;