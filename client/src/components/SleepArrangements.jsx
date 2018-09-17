import React from 'react';
import styled from 'styled-components';
import Bedroom from './Bedroom.jsx';
import PropTypes from 'prop-types';

// Additional features to implement:
// List out type of bed for each bedroom, and beds for common space
// Complete sleep arrangement carousel (update data to include >2 bedrooms max)

const StyledSleepArrangements = styled.div`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #484848;
  margin: 20px 10px 10px 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.5px;
`;

const Container = styled.div`
  flex-basis: 700px;
  display: flex;
  flex-direction: row;
  `;

const Carousel = styled.div`
  display: flex;
  flex-basis: 550px;
  flex-direction: row;
  flex-grow: 1;
  overflow: scroll;
`;

const ArrowButton = styled.button`
  box-shadow: 0 0 2px #e6e6e6;
  color: #484848;
  border-radius: 50%;
  outline: none;
  height: 32px;
  width: 32px;
  font-size: 24px;
  font-weight: 150;
  margin: auto;
`;

const RightArrow = styled.i`
  border: solid;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 6px;
  margin: 0 0 6px -6px;
  vertical-align: middle;
  transform: rotate(-45deg);
  flex-grow: 0;
  `;

const LeftArrow = styled.i`
  border: solid;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 6px;
  margin: 0 0 6px 4px;
  vertical-align: middle;
  transform: rotate(135deg);
  flex-grow: 0;
`;

class SleepArrangements extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0
    };
    this.prevSlide = this.prevSlide.bind(this);
  }

  prevSlide() {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  }

  nextSlide() {
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }

  render() {
    const { beds:{ bedrooms, commonSpace } } = this.props;
    return(
      <StyledSleepArrangements>
        <div>Sleeping arrangements</div>
        <Container>
          <ArrowButton onClick={() => this.prevSlide()}><LeftArrow /></ArrowButton>
          <Carousel>
            {bedrooms.map((bedroom, index) => {
              return <Bedroom bedroom={bedroom} index={index} />
            })}
          </Carousel>
          <ArrowButton onClick={() => this.nextSlide()}><RightArrow /></ArrowButton>
        </Container>
      </StyledSleepArrangements>
    )
  }
};

SleepArrangements.propTypes = {
  beds: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.array]))
};

SleepArrangements.defaultProps = {
  beds: {
    bedrooms: [],
    commonSpace: []
  }
};

export default SleepArrangements;