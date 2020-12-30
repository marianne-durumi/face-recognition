/* eslint-disable react/prop-types */
import React from 'react';

const FaceRecognition = ({ imageUrl }) => (
  <div className="flex justify-center mt3">
    <img src={imageUrl} alt="" width="500px" height="auto" />
  </div>
);

export default FaceRecognition;
