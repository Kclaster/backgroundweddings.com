import React from 'react';

import { erinWilson } from '../../articles/reference';
import PictureForGrid from '../PictureForGrid';
import '../../styles/AlyssaAndRyne.css';
import Header from '../Header';
import Footer from '../Footer';
import star from '../../pics/Karley and Chris/star.jpg';
import one from '../../pics/Karley and Chris/one.jpg';
import two from '../../pics/Karley and Chris/two.jpg';
import three from '../../pics/Karley and Chris/three.jpg';
import four from '../../pics/Karley and Chris/four.jpg';
import five from '../../pics/Karley and Chris/five.jpg';
import six from '../../pics/Karley and Chris/six.jpg';
import seven from '../../pics/Karley and Chris/seven.jpg';
import ten from '../../pics/Karley and Chris/ten.jpg';
import Template from './Template';
import { karleyTestimony } from '../../articles/testimonies';

const KarleyAndChris = () => {
  return (
    <div>
      <Header />
      <Template
        header={star}
        girlName="Karley"
        boyName="Chris"
        lastName="King"
        testimony={karleyTestimony}
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
          <PictureForGrid source={ten} description="shower" />
        </div>
      </div>
      <div className="reference">
        <a href={erinWilson.link}>
          <h3>Photos By:</h3>
          <h3>{erinWilson.name}</h3>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default KarleyAndChris;
