import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AmenityModal from './AmenityModal.jsx';

const StyledAmenities = styled.div`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #484848;
  margin: 20px 20px 10px 10px;
  font-size: 15px;
  font-weight: 320;
  line-height: 1.4;
  letter-spacing: 0.5px;
`;

const AmenitiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const AmenityContainer = styled.div`
  display: flex;
  margin: 4px 4px 4px -2px;
`;

const AmenityIcon = styled.img`
  height: 32px;
  width: 32px;
  margin: -5px 5px 5px -5px;
`;

const ExpansionLink = styled.button`
  font-size: 16px;
  border: none;
  outline: none;
  font-weight: 500;
  color: #00abb2;
  padding: 0;
  margin-top: 10px;
`;

const imageUrls = {
  'essentials (towels, bedsheets, soap, toilet paper, pillows)': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/essentials.png',
  'wifi': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/wifi.png',
  'shampoo': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/shampoo.png',
  'TV': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/TV.png',
  'desk/workspace': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/laptopWorkspace.png',
  'fireplace': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/fireplace.png',
  'parking': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/parking.png',
  'gym': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/gym.png',
  'pool': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/pool.png',
  'dining': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/dining.png',
  'hottub': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/hottub.png',
  'washer': 'https://s3-us-west-1.amazonaws.com/betterbnb-description/washer.png',
};

const title = {
  fontSize: '16px',
  fontWeight: '500',
  marginBottom: '15px'
};

const capitalize = (word) => {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}

const assembleIcons = ({ basics, facilities, dining, safety }) => {
  let icons = [];
  let allAmenities = basics.concat(facilities, dining, safety);
  for (let i = 0; i < allAmenities.length; i += 1) {
    if (allAmenities[i] in imageUrls) {
      icons.push([allAmenities[i], imageUrls[allAmenities[i]]]);
    }
    if (icons.length >= 6) { break; }
  }
  return icons;
}

const totalAmenities = ({ basics, facilities, dining, safety }) => {
  return basics.concat(facilities, dining, safety).length;
}

class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prevState) => ({
      modalIsOpen: !prevState.modalIsOpen
    }));
  }

  render() {
    const { amenities } = this.props;
    let icons = assembleIcons(amenities);
    let total = totalAmenities(amenities);
    return(
      <StyledAmenities>
        <div style={title}>Amenities</div>
        <AmenitiesContainer>
          {icons.map((icon, index) => {
            return(
              <AmenityContainer key={index}>
                <AmenityIcon src={icon[1]}></AmenityIcon>
                <span>{capitalize(icon[0])}</span>
              </AmenityContainer>
            )
          })}
        </AmenitiesContainer>
        <ExpansionLink onClick={() => {this.toggleModal()}}>Show all {total} amenities</ExpansionLink>
        <AmenityModal 
          show={this.state.modalIsOpen} 
          amenities={amenities} 
          onClose={this.toggleModal}/>
      </StyledAmenities>
    )
  }
};

Amenities.propTypes = {
  amenities: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.array]))
};

Amenities.defaultProps = {
  amenities: {
    basics: [],
    facilities: [],
    dining: [],
    safety: []
  }
};

export default Amenities;