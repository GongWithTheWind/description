import React from 'react';
import styled from 'styled-components';

// Additional features to implement:
// Show type of bed for each bedroom

const StyledSleepArrangements = styled.div`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #484848;
  margin: 20px 20px 10px 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.5px;
  display: flex;
`;
  
const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 210px;
`;

const Carousel = styled.div`
  position: relative;
`;

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const BedroomContainer = styled.div`
  box-shadow: 0 0 2px #e6e6e6;
  box-sizing: content-box;
  margin: 20px 5px 5px 5px;
  padding: 15px 20px 15px 20px;
  font-size: 13px;
  font-weight: 320;
  line-height: 1.4;
  letter-spacing: 0.5px;
`;

const StyledBed = styled.img`
  height: 24px;
  width: 24px;
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

const pluralize = (category, quantity) => {
  return quantity > 1 ? quantity.toString().concat(' ', category, 's') : quantity.toString().concat(' ', category); 
};

const countBeds = (beds) => {
  let arrangments = [];
  let doubles = ['king', 'queen', 'double'];
  let singles = ['twin', 'floor mattress', 'futon', 'couch'];
  beds.bedrooms.forEach((bedroom, index) => {
    let doublesCount = 0;
    let singlesCount = 0;
    if (Array.isArray(bedroom)) {
      bedroom.forEach(bed => {
        if (doubles.includes(bed)) {
          doublesCount++;
        } else if (singles.includes(bed)) {
          singlesCount++;
        }
      });
    } else if (doubles.includes(bedroom)) {
      doublesCount++;
    } else if (singles.includes(bedroom)) {
      singlesCount++;
    }
    arrangments.push([`Bedroom ${index + 1}`, doublesCount, singlesCount]);
  });
  return arrangments;
}

const SleepArrangements = ({ beds }) => {
  let arrangements = countBeds(beds);

  return(
    <StyledSleepArrangements>
      <Carousel>
        <div>Sleeping arrangements</div>
        {arrangements.map((bedroom) => {
          return (
            <BedroomContainer>
              {Array(bedroom[1]).fill(imageUrls.doubleBed).map(image => {
                return (<StyledBed src={image}></StyledBed>)
              })}
              {Array(bedroom[2]).fill(imageUrls.singleBed).map(image => {
                return (<StyledBed src={image}></StyledBed>)
              })}
              <div style={title}>{bedroom[0]}</div>
              {(bedroom[1] > 0) ? <div>{pluralize('double bed', bedroom[1])}</div> : <div></div>}
              {(bedroom[2] > 0) ? <div>{pluralize('single bed', bedroom[2])}</div> : <div></div>}
            </BedroomContainer>
          )
        })}
      </Carousel>
    </StyledSleepArrangements>
  )
}

export default SleepArrangements;