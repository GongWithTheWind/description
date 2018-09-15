import React from 'react';
import styled from 'styled-components';

const DescriptionBox = styled.div`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #484848;
  margin: 20px 20px 10px 10px;
  font-size: 15px;
  font-weight: 320;
  line-height: 1.4;
  letter-spacing: 0.75px;
`;

const title = {
  fontSize: '16px',
  fontWeight: '400',
  marginBottom: '5px'
};

const link = {
  fontSize: '16px',
  fontWeight: '500',
  color: '#00abb2',
  letterSpacing: '0.5px'
};

// This function is used where paragraph title is stored as camelCase property
// in database. Code may need to be refactored if data schema is altered.

const transformCase = (camelCase) => {
  let output = '';
  camelCase.split('').forEach(letter => {
    if (letter == letter.toUpperCase()) {
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

  componentDidMount() {}

  toggleShowText() {
    let newState = this.state.showText ? false : true;
    this.setState({ showText: newState });
  }

  render() {
    if (this.state.showText) {
      return(
        <DescriptionBox>
          {
            Object.keys(this.props.description).map((keyName, keyIndex) => {
              return (
                <div key={keyIndex}>
                  <div style={title}>{transformCase(keyName) === 'General' ? '' : transformCase(keyName)}</div>
                  <p>{this.props.description[keyName]}</p>
                </div>
              )
            })
          }
          <a style={link} onClick={() => this.toggleShowText()}>Hide &#9650;</a>
        </DescriptionBox>
      )
    } else {
      return(
        <DescriptionBox>
          <p>{this.props.description.general}</p>
          <a style={link} onClick={() => this.toggleShowText()}>Read more about the space &#9660;</a>
        </DescriptionBox>
      )
    }
  }
}

export default Description;