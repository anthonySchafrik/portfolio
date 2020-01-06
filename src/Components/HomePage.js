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
          I have been around computers since before I can remember. When I was
          younger, I would watch my dad build and dismantle computers. Some
          people held the flashlight while their dad worked on a car - I got to
          do that while my dad worked on computers. I started building and
          dismantling computers the way other kids would build and dismantle
          legos, which led to learning about such things as overclocking and
          water-cooling. My first job was in a PC repair shop, where I was paid
          to do what I loved - building and dismantling computers! A few years
          later, a friend of mine introduced me to code. I was immediately
          hooked, and jumped right in to learning everything I could about
          programming. During this time, I met other like-minded, driven
          individuals and worked together to create multiple web applications.
          From there, I started building my own full-stack application. I find
          debugging to be my favorite part of programming, and I greatly enjoy
          the thought of knowing there is near-endless code to learn; the skill
          ceiling is incredibly high, which makes my accomplishments all the
          more rewarding. I eagerly await the opportunity to work with you!
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
