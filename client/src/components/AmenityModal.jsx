import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
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

const mainTitle = {
  fontSize: '24px',
  fontWeight: '500'
};

const title = {
  fontSize: '16px',
  fontWeight: '500',
};

const listAmenities = (list) => {
  return list.map(amenity => {
    return <div>{amenity}<SectionBreakLine /></div>
  })
}

class AmenityModal extends React.Component {
  render() {
    if(!this.props.show) { return null; }
    return (
      <Backdrop>
        <AmenityList>
        <div>
          <CloseButton type='image' src='https://s3-us-west-1.amazonaws.com/betterbnb-description/closeButton.png' onClick={this.props.onClose}></CloseButton>
          <div style={mainTitle}>Amenities</div>
          <div style={title}>Basics</div>
          <div>{listAmenities(this.props.amenities.basics)}</div>
          <div style={title}>Facilities</div>
          <div>{listAmenities(this.props.amenities.facilities)}</div>
          <div style={title}>Dining</div>
          <div>{listAmenities(this.props.amenities.dining)}</div>
          <div style={title}>Safety</div>
          <div>{listAmenities(this.props.amenities.safety)}</div>
        </div>
        </AmenityList>
      </Backdrop>
    );
  }
}

export default AmenityModal;
