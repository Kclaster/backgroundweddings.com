import React from 'react';

import PictureForGrid from '../PictureForGrid';
import '../../styles/AlyssaAndRyne.css';
import Header from '../Header';
import Footer from '../Footer';
import star from '../../pics/Robyn and Kelly/star.jpg';
import one from '../../pics/Robyn and Kelly/one.jpg';
import two from '../../pics/Robyn and Kelly/two.jpg';
import four from '../../pics/Robyn and Kelly/four.jpg';
import five from '../../pics/Robyn and Kelly/five.jpg';
import six from '../../pics/Robyn and Kelly/six.jpg';
import seven from '../../pics/Robyn and Kelly/seven.jpg';
import eight from '../../pics/Robyn and Kelly/eight.jpg';
import nine from '../../pics/Robyn and Kelly/nine.jpg';
import ten from '../../pics/Robyn and Kelly/ten.jpg';
import eleven from '../../pics/Robyn and Kelly/eleven.jpg';
import twelve from '../../pics/Robyn and Kelly/twelve.jpg';
import thirteen from '../../pics/Robyn and Kelly/thirteen.jpg';
import fourteen from '../../pics/Robyn and Kelly/fourteen.jpg';
import fifteen from '../../pics/Robyn and Kelly/fifteen.jpg';
import seventeen from '../../pics/Robyn and Kelly/seventeen.jpg';
import Template from './Template';
import { robynTestimony } from '../../articles/testimonies';

const RobynAndKelly = () => {
  return (
    <div>
      <Header />
      <Template
        header={star}
        girlName="Robyn"
        boyName="Kelly"
        lastName="Lindsay"
        testimony={robynTestimony}
      />
      <div className="container">
        <div className="picture-grid">
          <PictureForGrid source={one} description="erin working" />
          <PictureForGrid source={two} description="hands holding lamp" />
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
          <PictureForGrid source={twelve} description="water fountain" />
          <PictureForGrid source={thirteen} description="rings" />
          <PictureForGrid source={fourteen} description="ceremony" />
          <PictureForGrid source={fifteen} description="ceremony" />
          <PictureForGrid source={seventeen} description="ceremony" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RobynAndKelly;
