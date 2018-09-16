import React from 'react';
import CapacityBar from './CapacityBar.jsx';
import styled from 'styled-components';

const StyledHeader = styled.div`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #484848;
  display: flex;
  flex-direction: row;
  margin-top: 18px;
`;

const TextContainer = styled.div`
  margin-left: 0;
  flex-basis: 550px;
  padding-left: 10px;
`;

const ImageContainer = styled.div`
  margin-right: 0;
  flex-basis: 150px;
`;

const StyledPropertyType = styled.div`
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 800;
  margin: 10px 3px 3px 2px;
`;

const StyledName = styled.div`
  font-weight: 545;
  font-size: 32px;
  word-wrap: break-word;
  line-height: 32px;
`;

const StyledLocation = styled.div`
  font-weight: 250;
  font-size: 14px;
  margin: 3px 3px 12px 2px;
  padding-top: 6px;
  padding-bottom: 6px;
  letter-spacing: 0.5px;
`;

const StyledOwnerName = styled.div`
  text-align: center;
  font-size: 12px;
  font-weight: 250;
  line-height: 12px;
  letter-spacing: 1.0px;
`;

const StyledImage = styled.img`
  display: block;
  margin: 20px auto 8px auto;
  height: 48px;
  width: 48px;
  overflow: hidden;
  border-radius: 50%;
`;

const Header = ({ propertyType, name, location, owner, guests, beds, bathrooms }) => {
  return(
    <StyledHeader>

      <TextContainer>
        <StyledPropertyType style={{color: '#734f21'}}>{propertyType}</StyledPropertyType>
        <StyledName>{name}</StyledName>
        <StyledLocation>{location}</StyledLocation>
        <CapacityBar guests={guests} beds={beds} bathrooms={bathrooms}/>
      </TextContainer>

      <ImageContainer>
        <StyledImage src={owner.image} id='ownerPic'></StyledImage>
        <StyledOwnerName>{owner.name}</StyledOwnerName>
      </ImageContainer>

    </StyledHeader>
  )
};

export default Header;