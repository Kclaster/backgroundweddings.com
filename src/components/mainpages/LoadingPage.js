import React from 'react';
import styled, { keyframes } from 'styled-components';
import styles from '../../styles';
import logo from '../../pics/general/logo-grey.png';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.span`
  width: 35px;
  height: 35px;
  display: inline-block;
  border: 5px solid rgba(189, 189, 189, 0.25);
  border-radius: 50%;
  border-left-color: ${styles.colors.main.light};
  border-top-color: ${styles.colors.main.light};
  animation: ${rotate} 2s linear infinite;
`;

const Wrapper = styled.div`
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: 25vw;
  height: auto;
`;

const LoadingPage = () => {
  return (
    <Wrapper>
      <LoadingIcon />
      <StyledImage src={logo} alt="logo" />
    </Wrapper>
  );
};

export default LoadingPage;
