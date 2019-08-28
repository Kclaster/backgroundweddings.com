import React from 'react';

import { ziegler } from '../../articles/reference';
import PictureForGrid from '../PictureForGrid';
import '../../styles/AlyssaAndRyne.css';
import Header from '../Header';
import Footer from '../Footer';
import star from '../../pics/Katie and Brett/star.jpg';
import one from '../../pics/Katie and Brett/one.jpg';
import two from '../../pics/Katie and Brett/two.jpg';
import three from '../../pics/Katie and Brett/three.jpg';
import four from '../../pics/Katie and Brett/four.jpg';
import five from '../../pics/Katie and Brett/five.jpg';
import seven from '../../pics/Katie and Brett/seven.jpg';
import eight from '../../pics/Katie and Brett/eight.jpg';
import nine from '../../pics/Katie and Brett/nine.jpg';
import ten from '../../pics/Katie and Brett/ten.jpg';
import eleven from '../../pics/Katie and Brett/eleven.jpg';
import twelve from '../../pics/Katie and Brett/twelve.jpg';
import thirteen from '../../pics/Katie and Brett/thirteen.jpg';
import fourteen from '../../pics/Katie and Brett/fourteen.jpg';
import fifteen from '../../pics/Katie and Brett/fifteen.jpg';
import seventeen from '../../pics/Katie and Brett/seventeen.jpg';

import Template from './Template';
import { katieTestimony } from '../../articles/testimonies';

const KatieAndBrett = () => {
  return (
    <div>
      <Header />
      <Template
        header={star}
        girlName="Katie"
        boyName="Brett"
        lastName="Bellamy"
        testimony={katieTestimony}
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
      <div className="reference">
        <a href={ziegler.link}>
          <h3>Photos By:</h3>
          <h3>{ziegler.name}</h3>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default KatieAndBrett;
