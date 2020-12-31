/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
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
      box: {},
      route: 'signin',
      isSignedIn: false,
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    const { input } = this.state;
    this.setState({ imageUrl: input });
    // setState는 여러 이유로 비동기식이다 그러므로
    // 아래에서 우리가 predict 함수로 Clarifai를 호출하였을 때 아직 React가 윗줄의 setState를
    // 완료하지 못하였을 수 있으므로 대신 input을 인수로 사용하였다.
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((response) => {
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch((err) => console.log(err));
  };

  onRouteChange = (place) => {
    if (place === 'signout') {
      this.setState({ isSignedIn: false });
    } else if (place === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: place });
  };

  render() {
    const { route, imageUrl, box, isSignedIn } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation isSignedIn={isSignedIn} routeChange={this.onRouteChange} />
        {route === 'home' ? (
          <>
            <Logo />
            <Rank />
            <ImageLinkForm inputChange={this.onInputChange} buttonSubmit={this.onButtonSubmit} />
            <FaceRecognition imageUrl={imageUrl} box={box} />
          </>
        ) : route === 'signin' ? (
          <Signin routeChange={this.onRouteChange} />
        ) : (
          <Register routeChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
