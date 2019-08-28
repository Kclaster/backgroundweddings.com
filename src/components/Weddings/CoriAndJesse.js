import React from 'react';

import { novoStudios } from '../../articles/reference';
import PictureForGrid from '../PictureForGrid';
import '../../styles/AlyssaAndRyne.css';
import Header from '../Header';
import Footer from '../Footer';
import star from '../../pics/Cori and Jesse/star.jpg';
import one from '../../pics/Cori and Jesse/one.jpg';
import two from '../../pics/Cori and Jesse/two.jpg';
import three from '../../pics/Cori and Jesse/three.jpg';
import four from '../../pics/Cori and Jesse/four.jpg';
import five from '../../pics/Cori and Jesse/five.jpg';
import six from '../../pics/Cori and Jesse/six.jpg';
import seven from '../../pics/Cori and Jesse/seven.jpg';
import eight from '../../pics/Cori and Jesse/eight.jpg';
import nine from '../../pics/Cori and Jesse/nine.jpg';
import ten from '../../pics/Cori and Jesse/ten.jpg';
import twelve from '../../pics/Cori and Jesse/twelve.jpg';
import thirteen from '../../pics/Cori and Jesse/thirteen.jpg';
import fourteen from '../../pics/Cori and Jesse/fourteen.jpg';

import Template from './Template';
import { coriTestimony } from '../../articles/testimonies';

const CoriAndJesse = () => {
  return (
    <div>
      <Header />
      <Template
        header={star}
        girlName="Cori"
        boyName="Jesse"
        lastName="Hertzberg"
        testimony={coriTestimony}
      />
      <div className="container">
        <div className="picture-grid">
          <PictureForGrid source={one} description="erin working" />
          <PictureForGrid source={two} description="hands holding lamp" />
          <PictureForGrid source={three} description="chapel" />
          <PictureForGrid source={four} description="dancing couple" />
          <PictureForGrid
            source={five}
            description="couple holding wedding sign"
          />
          <PictureForGrid source={six} description="couple at steeple" />
          <PictureForGrid source={seven} description="post wedding" />
          <PictureForGrid source={eight} description="groomsmen" />
          <PictureForGrid source={nine} description="bridal party" />
          <PictureForGrid source={ten} description="shower" />
          <PictureForGrid source={twelve} description="water fountain" />
          <PictureForGrid source={thirteen} description="rings" />
          <PictureForGrid source={fourteen} description="ceremony" />
        </div>
      </div>
      <div className="reference">
        <a href={novoStudios.link}>
          <h3>Photos By:</h3>
          <h3>{novoStudios.name}</h3>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default CoriAndJesse;
