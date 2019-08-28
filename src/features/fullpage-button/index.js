import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './style.css';
import styles from '../../styles';

const HeaderWrapper = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
  :hover {
    color: white;
    opacity: 0.8;
    transition: opacity 0.1s ease-in;
  }
  @media (max-width: 650px) {
     opacity: 0.75;
      position: absolute;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      text-align: center;
      border: 1px solid #535d63;
      left: 0
      right: 0
      margin: auto;
      height: auto;
  }
`;

const FullpageButton = props => {
  console.log('akuna', props.borderRight);
  const Wrapper = styled.div`
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 6vh 0;
    border-top: 3px solid ${styles.colors.main.dark};
    border-bottom: 3px solid ${styles.colors.main.dark};
    border-right: ${props.borderRight
      ? `3px solid ${styles.colors.main.dark}`
      : 'none'};
    @media (max-width: 450px) {
      border: 3px solid ${styles.colors.main.dark};
      border-bottom: ${props.borderRight
        ? 'none'
        : `3px solid ${styles.colors.main.dark}`};
      width: 80vw;
      margin: 0;
    }
  `;
  return (
    <Link to={props.href}>
      <Wrapper className={`${props.borderRight}`}>
        <HeaderWrapper>
          <h2 className="onHoverTitle">{props.Title}</h2>
        </HeaderWrapper>
        <img
          className="service-pic"
          src={props.pic}
          alt="wedding celebration"
        />
      </Wrapper>
    </Link>
  );
};

export default FullpageButton;
