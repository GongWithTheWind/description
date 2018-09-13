import React from 'react';
import styled from 'styled-components';

const StyledCapacityBar = styled.div`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #484848;
  font-weight: 300;
  font-size: 15px;
`;

const StyledIcon = styled.img`
  height: 20px;
  width: 20px;
  margin: 0px 8px -4px 8px;
`;

const imageUrls = {
  guest: 'https://s3-us-west-1.amazonaws.com/betterbnb-description/guests.png',
  bed: 'https://s3-us-west-1.amazonaws.com/betterbnb-description/beds.png',
  bath: 'https://s3-us-west-1.amazonaws.com/betterbnb-description/baths.png',
  bedroom: 'https://s3-us-west-1.amazonaws.com/betterbnb-description/bedrooms.png'
};

const pluralize = (category, quantity) => {
  return quantity > 1 ? quantity.toString().concat(' ', category, 's') : quantity.toString().concat(' ', category); 
};

const CapacityBar = ({ guests, beds, bathrooms }) => {
  return(
    <StyledCapacityBar>
      <span> <StyledIcon src={imageUrls.guest}></StyledIcon>{pluralize('guest', guests)}</span>
      <span> <StyledIcon src={imageUrls.bedroom}></StyledIcon>{pluralize('bedroom', beds.bedrooms.length)}</span>
      <span> <StyledIcon src={imageUrls.bed}></StyledIcon>{pluralize('bed', beds.bedrooms.reduce((accum, current) => { return accum + current.length; }, 0))}</span>
      <span> <StyledIcon src={imageUrls.bath}></StyledIcon>{pluralize('bath', bathrooms)}</span>
    </StyledCapacityBar>
  )
};

export default CapacityBar;