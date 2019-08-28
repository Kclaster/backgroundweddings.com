// External Dependencies
import React from 'react'
import styled from 'styled-components';
// Internal Dependencies
import pic from '../../pics/general/Erin Pics/fun2.jpg'
import Header from '../Header';

// Local Variables
const Wrapper = styled.div({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '45px'
});

const StyledImage = styled.img({
  width: 'auto',
  height: '40vh',
  borderRadius: '100000px',
})

const TextWrapper = styled.div({
  width: '40vw',
  textAlign: 'center',
})

// Component Definition
const SuccessPage = () => {
  return (
    <>
    <Header />
    <Wrapper>
      <StyledImage src={pic} alt="picture of Erin"/>
      <TextWrapper>
      <h3>Looking forward to speaking with you!</h3>
      <h2>If you would like to reach me faster, I can be reached at (616)520-5170!</h2>
      </TextWrapper>
    </Wrapper>
    </>
  )
}

export default SuccessPage