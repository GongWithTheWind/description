import React from 'react';
import styled from 'styled-components';
import Bedroom from './Bedroom.jsx';
import PropTypes from 'prop-types';

// Additional features to implement:
// List out type of bed for each bedroom, and beds for common space

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
  display: flex;
  flex-direction: row;
`;

const Window = styled.div`
  flex-basis: 630px;
  overflow: hidden;
`;
// overflow: scroll for scrollable carousel

const Carousel = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: row;
  flex-grow: 1;
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
  z-index: 1;
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
  z-index: 1;
`;

class SleepArrangements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.prevSlide = this.prevSlide.bind(this);
    this.carouselSize;
    this.minTranslateLimit;
  }

  prevSlide() {
    if (this.state.currentIndex < 0) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 205
      }));
    }
  }

  nextSlide() {
    if (this.state.currentIndex > this.minTranslateLimit && this.minTranslateLimit !== 0) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 205
      }));
    }
  }

  render() {
    this.carouselSize = this.props.beds.bedrooms.length * 205;
    this.minTranslateLimit = this.carouselSize > 615 ? 615 - this.carouselSize : 0;
    const shift = { 
      transform: `translate(${this.state.currentIndex}px)`,
      transition: `0.5s ease`
    };
    const { beds:{ bedrooms, commonSpace } } = this.props;
    return(
      <StyledSleepArrangements>
        <div>Sleeping arrangements</div>
        <Container>
          <ArrowButton onClick={() => this.prevSlide()}><LeftArrow /></ArrowButton>
          <Window>
            <Carousel style={shift}>
              {bedrooms.map((bedroom, index) => {
                return <Bedroom bedroom={bedroom} index={index}/>
              })}
            </Carousel>
          </Window>
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