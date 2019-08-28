import React from 'react';

import '../styles/PageSnippets.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageSnippets = props => {
  const Wrapper = styled.div`
    position: relative;
    width: 25vw;
    display: flex;
    border: 1px solid #535d63;
    margin: 3vh;
    align-items: center @media (max-width: 650px) {
      position: relative;
      width: 40vw;
      display: flex;
      border: 1px solid #535d63;
      margin: 3vh;
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 450px) {
      width: 80vw;
    }
  `;

  const TextWrapper = styled.div`
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
  }
  `;

  return (
    <Link to={props.href}>
      <Wrapper id={props.snipid}>
        <TextWrapper id={props.hoverid}>
          <h2 className="onHoverTitle">{props.title}</h2>
        </TextWrapper>
        <img className="snippet-image" src={props.image} alt={props.title} />
      </Wrapper>
    </Link>
  );
};

export default PageSnippets;
