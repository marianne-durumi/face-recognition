/* eslint-disable react/prop-types */
import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ inputChange, buttonSubmit }) => (
  <>
    <p className="f3">This Magic Brain will detect faces in your pictures. Git it a try</p>
    <div className="flex justify-center">
      <div className="flex justify-center pa4 br3 shadow-5 form">
        <input className="w-70 f4 pa2" type="text" onChange={inputChange} />
        <button
          className="w-30 grow f4 link ph3 pv2 white bg-light-purple"
          type="submit"
          onClick={buttonSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  </>
);

export default ImageLinkForm;
