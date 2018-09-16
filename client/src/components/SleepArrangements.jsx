import React from 'react';
import styled from 'styled-components';
import Bedroom from './Bedroom.jsx';

// Additional features to implement:
// List out type of bed for each bedroom
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
  constructor(props) {
    super(props);
    this.state = {};
    this.prevSlide = this.prevSlide.bind(this);
  }

  prevSlide() {}

  nextSlide() {}

  render() {
    return(
      <StyledSleepArrangements>
        <div>Sleeping arrangements</div>
        <Container>
          <ArrowButton onClick={() => this.prevSlide()}><LeftArrow /></ArrowButton>
          <Carousel>
            {this.props.beds.bedrooms.map((bedroom, index) => {
              return <Bedroom bedroom={bedroom} key={index} index={index} />
            })}
          </Carousel>
          <ArrowButton onClick={() => this.nextSlide()}><RightArrow /></ArrowButton>
        </Container>
      </StyledSleepArrangements>
    )
  }
}

export default SleepArrangements;