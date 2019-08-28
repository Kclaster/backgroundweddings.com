import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import prof from '../../pics/general/Erin Pics/about-me.jpg';
import '../../styles/AboutMe.css';

class Blog extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="aboutme-container">
          <div className="about-me">
            <div className="column-image">
              <img id="aboutMe2" src={prof} alt="cover of Erin" />
            </div>
            <div className="aboutMeParagraphs">
              <div className="aboutMeParagraphChild">
                <h1 className="title">About Me</h1>
                <div className="word-container-container">
                  <div className="word-container">
                    <h3>Passionate</h3>
                    <h3>Driven</h3>
                    <h3>Energetic</h3>
                    <h3>Consistent</h3>
                    <h3>Personable</h3>
                  </div>
                  <p>
                    Hi! My name is Erin (or E or E-dawg or Boof, depending on
                    who you are.) I am a graduate of Michigan State University
                    with a BSW. I love working with people! Over many years of
                    ministry occupation and non-profit experience, I have had
                    the ability to make part of my living pulling off a lot of
                    events: something as simple as a small group gathering to
                    massive dance parties for 500+ and lots of things in
                    between.
                  </p>
                  <p>
                    And in recent history, I have begun coordinating many of my
                    friend’s weddings. The opportunity to share in this
                    important day has been a monumental joy for me. Because
                    there is so much that goes into that day, I know it is
                    important to keep the main things, the main things. With all
                    the details, logistics, and moving parts, it is my hope to
                    help you enjoy both the process and the day itself to the
                    fullest. Your wedding is a pinnacle event. And there is
                    wonderful power in sharing it. This is what I want to aid
                    in. I hope to bless, encourage, lead, serve and take charge
                    in a way that honors you and your family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Blog;
