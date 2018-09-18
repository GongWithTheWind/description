import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BedroomContainer = styled.div`
  box-shadow: 0 0 2px #e6e6e6;
  box-sizing: content-box;
  margin: 20px 8px 20px 8px;
  padding: 15px 20px 15px 20px;
  font-size: 16px;
  font-weight: 320;
  line-height: 1.4;
  letter-spacing: 0.5px;
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 150px;
`;

const StyledBed = styled.img`
  height: 32px;
  width: 32px;
  margin: 0px 0px 20px 0px;
`;

const title = {
  fontWeight: '420',
  marginBottom: '5px'
};

const imageUrls = {
  doubleBed: 'https://s3-us-west-1.amazonaws.com/betterbnb-description/bedDouble.png',
  singleBed: 'https://s3-us-west-1.amazonaws.com/betterbnb-description/bedSingle.png',
  sofaBed: 'https://s3-us-west-1.amazonaws.com/betterbnb-description/bedSofa.png'
};

const countBeds = (beds, index) => {
  let doubles = ['king', 'queen', 'double'];
  let singles = ['twin', 'floor mattress', 'futon', 'couch'];
  let doublesCount = 0;
  let singlesCount = 0;

  if (Array.isArray(beds)) {
    beds.forEach(bed => {
      if (doubles.includes(bed)) {
        doublesCount += 1;
      } else if (singles.includes(bed)) {
        singlesCount += 1;
      }
    });
  } else if (doubles.includes(beds)) {
    doublesCount += 1;
  } else if (singles.includes(beds)) {
    singlesCount += 1;
  }
  return [`Bedroom ${index + 1}`, doublesCount, singlesCount];
}

const pluralize = (category, quantity) => {
  return quantity > 1 ? 
    quantity.toString().concat(' ', category, 's') : 
    quantity.toString().concat(' ', category); 
};

const Bedroom = ({ bedroom, index }) => {
  let arrangement = countBeds(bedroom, index);
  return (
    <BedroomContainer>
      {Array(arrangement[1])
        .fill(imageUrls.doubleBed)
        .map((image, j) => {
        return <StyledBed src={image} key={j}></StyledBed>
      })}
      {Array(arrangement[2])
        .fill(imageUrls.singleBed)
          .map((image, k) => {
        return <StyledBed src={image} key={k}></StyledBed>
      })}
      <div style={title}>{arrangement[0]}</div>
      {(arrangement[1] > 0) ? 
        <div>{pluralize('double bed', arrangement[1])}</div> : 
        <div></div>}
      {(arrangement[2] > 0) ?
        <div>{pluralize('single bed', arrangement[2])}</div> :
        <div></div>}
    </BedroomContainer>
  )
}

Bedroom.propTypes = {
  bedroom: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  index: PropTypes.number
};

Bedroom.defaultProps = {
  bedroom: [],
  index: 0
};

export default Bedroom;