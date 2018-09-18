import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContact = styled.button`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #00abb2;
  border: none;
  outline: none;
  padding: 0;
  margin: 20px 20px 10px 10px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
  align-self: flex-start;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1;
`;

const EmailContact = styled.div`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  box-shadow: 0 0 10px #e6e6e6;
  background-color: #fff;
  color: #484848;
  padding: 25px;
  height: auto;
  max-height: max-content;
  font-weight: 300;
  line-height: 1.5;
`;

const CloseButton = styled.input`
  box-shadow: 0 0 4px #b7b7b7;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  padding: 5px;
  margin-bottom: 20px;
  outline: none;
  vertical-align: middle;
`;

const imageUrls = {
  close: 'https://s3-us-west-1.amazonaws.com/betterbnb-description/closeButton.png'
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  toggleModal() {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  }

  render() {
    const { contact } = this.props.owner;
    if (!this.state.showModal) {
      return <StyledContact 
        link={contact} 
        onClick={() => this.toggleModal()}>Contact host</StyledContact>
    } else {
      return(
        <div>
          <StyledContact link={contact}>Contact host</StyledContact>
          <Backdrop>
            <EmailContact>
              <CloseButton type='image' src={imageUrls.close} onClick={() => this.toggleModal()}></CloseButton>
              <div style={{'fontWeight': '400'}}>Email host at:</div>
              <div>{contact}</div>
            </EmailContact>
          </Backdrop>
        </div>
      )
    }
  }
};

Contact.propTypes = {
  owner: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.bool])),
  contact: PropTypes.string
};

Contact.defaultProps = {
  owner: {
    name: '',
    image: '',
    contact: '',
    badge: false
  },
  contact: ''
};

export default Contact;