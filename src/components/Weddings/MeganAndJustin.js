import React from 'react';

import { napierPhoto } from '../../articles/reference';
import PictureForGrid from '../PictureForGrid';
import '../../styles/AlyssaAndRyne.css';
import Header from '../Header';
import Footer from '../Footer';
import star from '../../pics/Megan and Justin/star.jpg';
import one from '../../pics/Megan and Justin/one.jpg';
import three from '../../pics/Megan and Justin/three.jpg';
import four from '../../pics/Megan and Justin/four.jpg';
import five from '../../pics/Megan and Justin/five.jpg';
import six from '../../pics/Megan and Justin/six.jpg';
import seven from '../../pics/Megan and Justin/seven.jpg';
import eight from '../../pics/Megan and Justin/eight.jpg';
import nine from '../../pics/Megan and Justin/nine.jpg';
import eleven from '../../pics/Megan and Justin/eleven.jpg';
import twelve from '../../pics/Megan and Justin/twelve.jpg';
import fourteen from '../../pics/Megan and Justin/fourteen.jpg';
//not sixteen
import Template from './Template';
import { meganTestimony } from '../../articles/testimonies';

const MeganAndJustin = () => {
  return (
    <div>
      <Header />
      <Template
        header={star}
        girlName="Megan"
        boyName="Justin"
        lastName="Berndt"
        testimony={meganTestimony}
      />
      <div className="container">
        <div className="picture-grid">
          <PictureForGrid source={one} description="erin working" />
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
          <PictureForGrid source={eleven} description="flowers" />
          <PictureForGrid source={twelve} description="water fountain" />
          <PictureForGrid source={fourteen} description="ceremony" />
        </div>
      </div>
      <div className="reference">
        <a href={napierPhoto.link}>
          <h3>Photos By:</h3>
          <h3>{napierPhoto.name}</h3>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default MeganAndJustin;
