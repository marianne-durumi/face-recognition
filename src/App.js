/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    line_linked: {
      shadow: {
        enable: true,
        color: '#3CA9D1',
        blur: 5,
      },
    },
  },
};

const app = new Clarifai.App({
  apiKey: '5cc310e469f5442a948f53890ee1c93e',
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    const { input } = this.state;
    this.setState({ imageUrl: input });
    // setState는 여러 이유로 비동기식이다 그러므로
    // 아래에서 우리가 predict 함수로 Clarifai를 호출하였을 때 아직 React가 윗줄의 setState를
    // 완료하지 못하였을 수 있으므로 대신 input을 인수로 사용하였다.
    app.models.predict(Clarifai.FACE_DETECT_MODEL, input).then(
      (response) => {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
      (err) => {},
    );
  };

  render() {
    const { imageUrl } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm inputChange={this.onInputChange} buttonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={imageUrl} />
      </div>
    );
  }
}

export default App;
