import React from 'react';

import NavBar from './navBar';
import logo from '../pics/general/logo-grey.png';
import styled from 'styled-components';

const StyledLink = styled.a`
  z-index: 2;
  margin: 4vh 0 0 2vw
:hover {
    transform-origin: left top;
    transform: scale(1.1);
    transition: transform 0.1s ease-in;
  }
`;
const StyledImage = styled.img`
  height: 100%;
  width: auto;

  @media (max-width: 425px) {
    margin: 2vh 0 0 2vw;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3vh;
  height: 20vh;

  @media (max-width: 650px) {
    margin-bottom: 15vh;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <StyledLink href="/">
        <StyledImage src={logo} alt="logo" />
      </StyledLink>
      <NavBar />
    </Wrapper>
  );
};

export default Header;
