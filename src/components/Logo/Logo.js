import React, {Component} from 'react';
import './Logo.css';
import LogoImage from '../../assets/liteflix.png';

class Logo extends Component {

  render () {
    return (
      <div className="Logo">
          <img src={LogoImage} alt="Logo"/>
      </div>
    );
  }

}

export default Logo;