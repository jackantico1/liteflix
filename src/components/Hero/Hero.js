import React, {Component} from 'react';
import './Hero.css';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import Icon from '../Icon/Icon';
import HeroInfo from '../HeroInfo/HeroInfo'

class Hero extends Component {

  render () {
    return (
      <div className="Hero">
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Logo/>
          <NavBar type="main" className="main"/>
          <Icon type="bigIcon"/>
          <NavBar type="secondary" className="secondary"/>
        </div>
        <HeroInfo/>
      </div>
    );
  }

}

export default Hero;