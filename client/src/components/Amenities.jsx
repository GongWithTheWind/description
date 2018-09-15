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

const title = {
  fontSize: '16px',
  fontWeight: '500',
  marginBottom: '5px'
};

const Amenities = () => {
  return(
    <StyledAmenities style={title}>Amenities</StyledAmenities>
  )
}

export default Amenities;