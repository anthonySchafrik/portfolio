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
          1
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '58vw'
          }}
        >
          2
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '56vw'
          }}
        >
          3
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '54vw'
          }}
        >
          4
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '52vw'
          }}
        >
          15
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '50vw'
          }}
        >
          6
        </div>
        <div
          className="appInfoBoxes"
          style={{
            width: '52vw'
          }}
        >
          7
        </div>
      </div>

      <div className="workPicContainer">
        <img src={pic} alt="Me in suite" height="700px" width="500px" />
      </div>
    </div>
  );
};

export default WorkPage;
