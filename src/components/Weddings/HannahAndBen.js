import React from 'react';

import { eugeneGrace } from '../../articles/reference';
import PictureForGrid from '../PictureForGrid';
import '../../styles/AlyssaAndRyne.css';
import Header from '../Header';
import Footer from '../Footer';
import star from '../../pics/Hannah and Ben/star.jpg';
import one from '../../pics/Hannah and Ben/one.jpg';
import two from '../../pics/Hannah and Ben/two.jpg';
import three from '../../pics/Hannah and Ben/three.jpg';
import four from '../../pics/Hannah and Ben/four.jpg';
import five from '../../pics/Hannah and Ben/five.jpg';
import six from '../../pics/Hannah and Ben/six.jpg';
import seven from '../../pics/Hannah and Ben/seven.jpg';
import eight from '../../pics/Hannah and Ben/eight.jpg';
import nine from '../../pics/Hannah and Ben/nine.jpg';
import ten from '../../pics/Hannah and Ben/ten.jpg';
import twelve from '../../pics/Hannah and Ben/twelve.jpg';
import thirteen from '../../pics/Hannah and Ben/thirteen.jpg';
import fourteen from '../../pics/Hannah and Ben/fourteen.jpg';
import fifteen from '../../pics/Hannah and Ben/fifteen.jpg';
import sixteen from '../../pics/Hannah and Ben/sixteen.jpg';
import Template from './Template';
import { hannahTestimony } from '../../articles/testimonies';

const HannahAndBen = () => {
  return (
    <div>
      <Header />
      <Template
        header={star}
        girlName="Hannah"
        boyName="Ben"
        lastName="Hiemstra"
        testimony={hannahTestimony}
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
          <PictureForGrid source={fifteen} description="ceremony" />
          <PictureForGrid source={sixteen} description="ceremony" />
        </div>
      </div>
      <div className="reference">
        <a href={eugeneGrace.link}>
          <h3>Photos By:</h3>
          <h3>{eugeneGrace.name}</h3>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default HannahAndBen;
