import React from 'react';
import styled from 'styled-components';

const StyledCapacityBar = styled.div`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #484848;
  font-weight: 300;
  font-size: 15px;
  margin-top: 30px;
`;

const StyledIcon = styled.img`
  height: 20px;
  width: 20px;
  margin: 0px 8px -4px 8px;
`;

const FirstIcon = styled.img`
  height: 18px;
  width: 18px;
  margin: 0px 4px -2px 0px;
`;

const ImageBlock = styled.div`
  display: block;
  float: left;
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
      <ImageBlock>
        <FirstIcon src={imageUrls.guest}></FirstIcon>{pluralize('guest', guests)} 
        <StyledIcon src={imageUrls.bedroom}></StyledIcon>{pluralize('bedroom', beds.bedrooms.length)} 
      </ImageBlock>
      <ImageBlock>
        <StyledIcon src={imageUrls.bed}></StyledIcon>{pluralize('bed', beds.bedrooms.reduce((accum, current) => { return accum + current.length; }, 0))}
        <StyledIcon src={imageUrls.bath}></StyledIcon>{pluralize('bath', bathrooms)}
      </ImageBlock> 
    </StyledCapacityBar>
  )
};

export default CapacityBar;