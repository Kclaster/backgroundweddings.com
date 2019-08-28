import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import FullpageButton from '../../features/fullpage-button';
import weddingPic from '../../pics/general/majorpics/wedding.jpg';
import eventPic from '../../pics/general/majorpics/event.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Services = () => {
  return (
    <div>
      <Header />
      <Wrapper className="service-container">
        <FullpageButton
          href="/services/WeddingService"
          borderRight="borderRight"
          Title="Weddings"
          pic={weddingPic}
        />
        <FullpageButton
          href="/Services/EventService"
          Title="Events"
          pic={eventPic}
        />
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Services;
