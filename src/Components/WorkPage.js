import React from 'react';

import pic from '../photos/work_portrait_clear.png';
import './WorkPage.css';

const WorkPage = () => {
  return (
    <div className="workContainer">
      <div style={{ marginLeft: '3vw' }}>
        <div
          className="appInfoBoxes"
          style={{
            width: '60vw'
          }}
        >
          Employee Onboarding Portal
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '58vw'
          }}
        >
          Poka Cheat
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '56vw'
          }}
        >
          Paper Dragon
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '54vw'
          }}
        >
          Gift Giving Elephant
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '52vw'
          }}
        >
          Pocket Goblin
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '50vw'
          }}
        >
          Goonies
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '52vw'
          }}
        >
          KidDash
        </div>
      </div>

      <div className="workPicContainer">
        <img src={pic} alt="Me in suite" height="700px" width="500px" />
      </div>
    </div>
  );
};

export default WorkPage;
