import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DescriptionBox = styled.div`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #484848;
  margin: 10px 20px 10px 10px;
  font-size: 15px;
  font-weight: 320;
  line-height: 1.4;
  letter-spacing: 0.75px;
`;

const ExpansionLink = styled.button`
  font-size: 16px;
  border: none;
  outline: none;
  font-weight: 500;
  color: #00abb2;
  padding: 0;
`;

const title = {
  fontSize: '16px',
  fontWeight: '400',
  marginBottom: '5px'
};

// This function is used where paragraph title is stored as camelCase property
// in database. Code may need to be refactored if data schema is altered.

const transformCase = (camelCase) => {
  let output = '';
  camelCase.split('').forEach(letter => {
    if (letter === letter.toUpperCase()) {
      output = output.concat(' ', letter.toLowerCase());
    } else {
      output = output.concat(letter);
    }
  });
  return output.slice(0, 1).toUpperCase() + output.slice(1);
}

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showText: false };
    this.toggleShowText = this.toggleShowText.bind(this);
  }

  toggleShowText() {
    this.setState((prevState) => ({ showText: !prevState.showText }));
  }

  render() {
    const { description } = this.props;
    if (this.state.showText) {
      return(
        <DescriptionBox>
          {Object.keys(description).map((keyName) => {
              return (
                <div>
                  <div style={title}>{transformCase(keyName) === 'General' ?
                    '' : transformCase(keyName)}</div>
                  <p>{description[keyName]}</p>
                </div>
              )
          })}
          <ExpansionLink 
            onClick={() => this.toggleShowText()}>Hide &#9650;</ExpansionLink>
        </DescriptionBox>
      )
    } else {
      return(
        <DescriptionBox>
          <p>{description.general}</p>
          <ExpansionLink 
            onClick={() => this.toggleShowText()}>Read more about the space &#9660;</ExpansionLink>
        </DescriptionBox>
      )
    }
  }
};

Description.propTypes = {
  description: PropTypes.objectOf(PropTypes.string)
};

Description.defaultProps = {
  description: {
    general: '',
    theSpace: '',
    guestAccess: '',
    interactionWithGuests: '',
    otherThings: ''
  }
};

export default Description;