import React, {Component} from 'react';
import {ImageBackground} from 'react';
import './Base.css';
import backgroundImage from './sexEducationPic.jpg';

class Base extends Component {

  render () {
    return (
      <div className="Base">
        {/* <ImageBackground source={backgroundImage}>
          <h1>Hello World!</h1>
        </ImageBackground> */}
        <h1>Hello World!</h1>
      </div>
    );
  }

}

export default Base;