import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.button`
  font-family: Circular, Helvetica Neue, Helvetica, Arial, sans-serif;
  color: #00abb2;
  border: none;
  outline: none;
  margin: 20px 20px 10px 10px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const Contact = ({ owner }) => {
  return(
    <StyledContact link={owner.contact}>Contact host</StyledContact>
  )
}

export default Contact;