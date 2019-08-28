import React from 'react';
import { connect } from 'react-redux';

import { setHeight } from '../actions';
import one from '../pics/general/mainPage/one.jpg';
import three from '../pics/general/mainPage/three.jpg';
import four from '../pics/general/mainPage/four.jpg';
import five from '../pics/general/mainPage/five.jpg';
import { main } from '../articles/lorem';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100vw;
`;

const ScrollingImage = styled.img`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  left: 0;
  right: 0;
  transition: opacity 1s ease-in;
  width: 100vw;
  z-index: 1;
  height: 100vh;
  width: auto;
  @media (max-width: 640px) {
    height: 50%
  }
`;

const ScrollWrapper = styled.div`
height: 50vh
  @media (min-width: 640px) {
    height: 100vh;
  } 
`;

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  top: 7px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 640px) {
    position: relative;
  }
`;

const TextWrapper = styled.div`
  text-align: center;
  background: white;
  opacity: 0.8;
  border-radius: 5px;
  color: black;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 638px;
  @media (max-width: 640px) {
    width: 90vw;
    height: auto;
  }
`;

const StyledParagraph = styled.p`
  position: relative;
  text-align: center;
  width: 535px;
  @media (max-width: 640px) {
    width: 90%;
    height: auto;
  }
`;

class ScrollingPics extends React.Component {
  pics = [one, three, four, five];

  componentDidMount() {
    window.addEventListener('resize', this.setHeight);
    //mess with height of scroll
    this.images = document.querySelectorAll('.scroll');
    this.current = 0;
    setInterval(() => {
      for (let i = 0; i < this.pics.length; i++) {
        this.images[i].style.opacity = 0;
      }
      this.current =
        this.current !== this.images.length - 1 ? this.current + 1 : 0;
      this.images[this.current].style.opacity = 1;
    }, 4500);
  }

  componentWillMount() {
    const images = document.querySelectorAll('.scroll');
    images.forEach(function(cur) {
      cur.style.opacity = 1;
    });
  }

  render() {
    return (
      <Wrapper>
        <ScrollWrapper />
        <ScrollingImage className="scroll" src={one} alt="ten" />
        <ScrollingImage className="scroll" src={three} alt="three" />
        <ScrollingImage className="scroll" src={four} alt="three" />
        <ScrollingImage className="scroll" src={five} alt="three" />
        <BodyWrapper>
          <TextWrapper>
            <h1>What is BackGround Weddings?</h1>
            <StyledParagraph>{main}</StyledParagraph>
          </TextWrapper>
        </BodyWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    height: state.setHeight.height
  };
};

export default connect(
  mapStateToProps,
  { setHeight }
)(ScrollingPics);
