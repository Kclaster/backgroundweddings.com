import React from 'react';

import { chrisKillingsworth } from '../../articles/reference';
import PictureForGrid from '../PictureForGrid';
import '../../styles/AlyssaAndRyne.css';
import Header from '../Header';
import Footer from '../Footer';
import star from '../../pics/Janie and Harold/star.jpg';
import two from '../../pics/Janie and Harold/two.jpg';
import five from '../../pics/Janie and Harold/five.jpg';
import seven from '../../pics/Janie and Harold/seven.jpg';
import ten from '../../pics/Janie and Harold/ten.jpg';
import eleven from '../../pics/Janie and Harold/eleven.jpg';
import twelve from '../../pics/Janie and Harold/twelve.jpg';
import thirteen from '../../pics/Janie and Harold/thirteen.jpg';
import fourteen from '../../pics/Janie and Harold/fourteen.jpg';
import Template from './Template';
import { janieTestimony } from '../../articles/testimonies';

const JanieAndHarold = () => {
  return (
    <div>
      <Header />
      <Template
        header={star}
        girlName="Janie"
        boyName="Harold"
        lastName="Crow"
        testimony={janieTestimony}
      />
      <div className="container">
        <div className="picture-grid-two">
          <PictureForGrid source={two} description="erin working" />
          <PictureForGrid
            source={five}
            description="couple holding wedding sign"
          />
          <PictureForGrid source={seven} description="post wedding" />
          <PictureForGrid source={ten} description="shower" />
          <PictureForGrid source={eleven} description="flowers" />
          <PictureForGrid source={twelve} description="water fountain" />
          <PictureForGrid source={thirteen} description="rings" />
          <PictureForGrid source={fourteen} description="ceremony" />
        </div>
      </div>
      <div className="reference">
        <a href={chrisKillingsworth.link}>
          <h3>Photos By:</h3>
          <h3>{chrisKillingsworth.name}</h3>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default JanieAndHarold;
