import React from 'react';

import { samuelGray } from '../../articles/reference';
import PictureForGrid from '../PictureForGrid';
import '../../styles/AlyssaAndRyne.css';
import Header from '../Header';
import Footer from '../Footer';
import star from '../../pics/Alyssa and Ryne/star.jpg';
import one from '../../pics/Alyssa and Ryne/one.jpg';
import four from '../../pics/Alyssa and Ryne/four.jpg';
import five from '../../pics/Alyssa and Ryne/five.jpg';
import six from '../../pics/Alyssa and Ryne/six.jpg';
import seven from '../../pics/Alyssa and Ryne/seven.jpg';
import eight from '../../pics/Alyssa and Ryne/eight.jpg';
import nine from '../../pics/Alyssa and Ryne/nine.jpg';
import ten from '../../pics/Alyssa and Ryne/ten.jpg';
import eleven from '../../pics/Alyssa and Ryne/eleven.jpg';
import thirteen from '../../pics/Alyssa and Ryne/thirteen.jpg';
import fourteen from '../../pics/Alyssa and Ryne/fourteen.jpg';
import Template from './Template';
import { alyssaTestimony } from '../../articles/testimonies';

const AlyssaAndRyne = () => {
  return (
    <div>
      <Header />
      <Template
        header={star}
        girlName="Alyssa"
        boyName="Ryne"
        lastName="Pruitt"
        testimony={alyssaTestimony}
      />
      <div className="container">
        <div className="picture-grid-two">
          <PictureForGrid source={one} description="erin working" />
          <PictureForGrid source={fourteen} description="chapel" />
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
          <PictureForGrid source={eleven} description="flowers" />
          <PictureForGrid source={thirteen} description="rings" />
        </div>
      </div>
      <div className="reference">
        <a href={samuelGray.link}>
          <h3>Photos By:</h3>
          <h3>{samuelGray.name}</h3>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default AlyssaAndRyne;
