/* eslint-disable react/prop-types */
import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => (
  <div className="flex justify-center">
    <div className="mt3 relative">
      <img id="inputimage" src={imageUrl} alt="" width="500px" height="auto" />
      <div
        className="bounding-box"
        style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
      />
    </div>
  </div>
);

export default FaceRecognition;
