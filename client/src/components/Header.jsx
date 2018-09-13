import React from 'react';
import CapacityBar from './CapacityBar.jsx';
import styled from 'styled-components';

const StyledHeader = styled.div`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #484848;
`;

const StyledPropertyType = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 0.8;
  font-weight: 800;
  display: inline-block;
`;

const StyledName = styled.div`
  font-weight: 545;
  font-size: 32px;
  word-wrap: break-word;
  line-height: 32px;
  padding-top: 0px;
  padding-bottom: 6px;
`;

const StyledLocation = styled.div`
  font-weight: 300;
  margin-top: 10px;
  margin-bottom: 24px;
  padding-top: 6px;
  padding-bottom: 6px;
`;

const StyledOwner = styled.div`
  display: table-cell;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
  float: right; 
  margin: 0px 0px 0px 0px;
`;

const StyledOwnerName = styled.div`
  vertical-align: middle;
  font-size: 12px;
  font-weight: 250;
  line-height: 12px;
`;

const StyledContainer = styled.span`
  height: 48px;
  width: 48px;
  overflow: hidden;
`;

const StyledImage = styled.img`
  vertical-align: middle;
  height: auto;
  width: 48px;
`;

const Header = ({ propertyType, name, location, owner, guests, beds, bathrooms }) => {
  
  return(
    <StyledHeader>
      <StyledPropertyType>{propertyType}</StyledPropertyType>
      <StyledName>{name}
        <StyledOwner>
          <StyledContainer>
            <StyledImage src={owner.image}></StyledImage>
            <StyledOwnerName>{owner.name}</StyledOwnerName>
          </StyledContainer>
        </StyledOwner>
      </StyledName>
      <StyledLocation>{location}</StyledLocation>
      <CapacityBar guests={guests} beds={beds} bathrooms={bathrooms}/>
    </StyledHeader>
  )
};

export default Header;