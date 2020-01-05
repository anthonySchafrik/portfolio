import React from 'react';

import './HomePage.css';
import homePicture from '../photos/home_portrait_clear.png';

const HomePage = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="picContainer">
          <img
            src={homePicture}
            alt="Me in suite"
            height="700px"
            width="500px"
          />
        </div>
        <div className="aboutMe">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </div>
      </div>

      <h1 className="name">
        Hello, I'm
        <span style={{ color: 'rgb(73, 62, 201)' }}> Anthony Schafrik</span>.
        I'm a full-stack web developer.
      </h1>
    </>
  );
};

export default HomePage;
