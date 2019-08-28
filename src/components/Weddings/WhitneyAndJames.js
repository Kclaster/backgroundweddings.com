import React from 'react';

import { milesBoyer } from '../../articles/reference';
import PictureForGrid from '../PictureForGrid';
import '../../styles/AlyssaAndRyne.css';
import Header from '../Header';
import Footer from '../Footer';
import star from '../../pics/Whitney and James/star.jpg';
import one from '../../pics/Whitney and James/one.jpg';
import two from '../../pics/Whitney and James/fourteen.jpg';
import three from '../../pics/Whitney and James/three.jpg';
import four from '../../pics/Whitney and James/four.jpg';
import five from '../../pics/Whitney and James/five.jpg';
import six from '../../pics/Whitney and James/six.jpg';
import seven from '../../pics/Whitney and James/seven.jpg';
import eight from '../../pics/Whitney and James/eight.jpg';
import nine from '../../pics/Whitney and James/nine.jpg';
import ten from '../../pics/Whitney and James/ten.jpg';
import eleven from '../../pics/Whitney and James/eleven.jpg';
import thirteen from '../../pics/Whitney and James/thirteen.jpg';
import fourteen from '../../pics/Whitney and James/two.jpg';
import fifteen from '../../pics/Whitney and James/fifteen.jpg';
import eighteen from '../../pics/Whitney and James/eighteen.jpg';
import nineteen from '../../pics/Whitney and James/nineteen.jpg';
import Template from './Template';
import { whitneyTestimony } from '../../articles/testimonies';

class WhitneyAndJames extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Template
          header={star}
          girlName="Whitney"
          boyName="James"
          lastName="Mix"
          testimony={whitneyTestimony}
        />
        <div className="container">
          <div className="picture-grid-two">
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
            <PictureForGrid source={eleven} description="flowers" />
            <PictureForGrid source={thirteen} description="rings" />
            <PictureForGrid source={fourteen} description="one" />
            <PictureForGrid source={fifteen} description="two" />
            <PictureForGrid source={eighteen} description="five" />
            <PictureForGrid source={nineteen} description="six" />
          </div>
        </div>
        <div className="reference">
          <a href={milesBoyer.link}>
            <h3>Photos By:</h3>
            <h3>{milesBoyer.name}</h3>
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default WhitneyAndJames;
