import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1;
`;

const CloseButton = styled.input`
  box-shadow: 0 0 4px #b7b7b7;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  padding: 5px;
  outline: none;
  vertical-align: middle;
`;

const AmenityList = styled.div`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  box-shadow: 0 0 10px #e6e6e6;
  background-color: #fff;
  padding: 25px;
  line-height: 3;
  height: auto;
  align-self: flex-start;
  max-height: max-content;
  flex-basis: 450px;
`;

const SectionBreakLine = styled.hr`
  border: 0;
  height: 1px;
  background-color: #e6e6e6;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const imageUrls = {
  close: 'https://s3-us-west-1.amazonaws.com/betterbnb-description/closeButton.png'
};

const listAmenities = (list) => {
  return list.map(amenity => {
    return <div>{amenity}<SectionBreakLine /></div>
  })
}

const AmenityModal = ({ show, onClose, amenities }) => {
    if(!show) { return null; }
    return (
      <Backdrop>
        <AmenityList>
          <CloseButton type='image' src={imageUrls.close} onClick={onClose}></CloseButton>
          <Title style={{'fontSize': '24px'}}>Amenities</Title>
          <Title>Basics</Title>
          <div>{listAmenities(amenities.basics)}</div>
          <Title>Facilities</Title>
          <div>{listAmenities(amenities.facilities)}</div>
          <Title>Dining</Title>
          <div>{listAmenities(amenities.dining)}</div>
          <Title>Safety</Title>
          <div>{listAmenities(amenities.safety)}</div>
        </AmenityList>
      </Backdrop>
    );
};

AmenityModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  amenities: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.array]))
};

AmenityModal.defaultProps = {
  show: false,
  onClose: () => {},
  amenities: {
    basics: [],
    facilities: [],
    dining: [],
    safety: []
  }
};

export default AmenityModal;
