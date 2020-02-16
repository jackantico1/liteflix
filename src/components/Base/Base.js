import React, {Component} from 'react';
import './Base.css';
import backgroundImage from './sexEducationPic.jpg';

class Base extends Component {

  render () {
    return (
      <div className="Base">
        <img 
          src={backgroundImage}
          alt="Pic from Sex Eduction"
          className="backgroundImage"></img>
      </div>
    );
  }

}

export default Base;