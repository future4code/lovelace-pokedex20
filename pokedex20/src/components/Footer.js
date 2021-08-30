import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  border: 1px solid black;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <p>footer</p>
    </FooterStyle>
  )
}

export default Footer;