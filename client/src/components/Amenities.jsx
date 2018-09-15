import React from 'react';
import styled from 'styled-components';

const StyledAmenities = styled.div`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #484848;
  margin: 20px 20px 10px 10px;
  font-size: 15px;
  font-weight: 320;
  line-height: 1.4;
  letter-spacing: 0.5px;
`;

const AmenityContainer = styled.div`
  display: flex;
`;

const imageUrls = {
  'essentials (towels, bedsheets, soap, toilet paper, pillows)': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/essentials.png',
  'wifi': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/wifi.png',
  'TV': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/TV.png',
  'fireplace': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/fireplace.png',
  'gym': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/gym.png',
  'pool': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/pool.png',
  'dining': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/dining.png',
  'desk/workspace': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/laptopWorkspace.png',
  'parking': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/parking.png',
  'hottub': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/hottub.png',
  'shampoo': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/shampoo.png',
  'washer': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/washer.png',
};

const title = {
  fontSize: '16px',
  fontWeight: '500',
  marginBottom: '5px'
};

const assembleIcons = (basicAmenities) => {
  let icons = {};
  let count = 0;

  while (count < 6) {}

}

const Amenities = () => {
  return(
    <div>
    <StyledAmenities style={title}>Amenities</StyledAmenities>
    <AmenityContainer>

    </AmenityContainer>
    </div>
  )
}

export default Amenities;