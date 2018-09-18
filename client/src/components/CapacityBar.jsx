import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCapacityBar = styled.div`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #484848;
  font-weight: 300;
  font-size: 15px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;

const PairContainer = styled.div`
  display: flex;
  margin-right: 15px;
`;

const SingleContainer = styled.div`
  flex-grow: 1;
  min-width: 100px;
`;

const StyledIcon = styled.img`
  height: 20px;
  width: 20px;
  margin: 0px 8px -4px 0px;
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
      <PairContainer>
        <SingleContainer>
          <StyledIcon src={imageUrls.guest}></StyledIcon>{pluralize('guest', guests)}
        </SingleContainer>
        <SingleContainer>
          <StyledIcon src={imageUrls.bedroom}></StyledIcon>{pluralize('bedroom', beds.bedrooms.length)}
        </SingleContainer>
      </PairContainer>
      <PairContainer>
        <SingleContainer>
          <StyledIcon src={imageUrls.bed}></StyledIcon>{pluralize('bed', beds.bedrooms.reduce((accum, current) => { return accum + current.length; }, 0))}
        </SingleContainer>
        <SingleContainer>
          <StyledIcon src={imageUrls.bath}></StyledIcon>{pluralize('bath', bathrooms)}
        </SingleContainer>
      </PairContainer> 
    </StyledCapacityBar>
  )
};

CapacityBar.propTypes = {
  guests: PropTypes.array,
  beds: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.array])),
  bathrooms: PropTypes.array
};

CapacityBar.defaultProps = {
  guests: [0],
  beds: {
    bedrooms: [],
    commonSpace: []
  },
  bathrooms: [0]
};

export default CapacityBar;