import React, {Component} from 'react';
import './Hero.css';
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'

class Hero extends Component {

  render () {
    return (
      <div className="Hero">
        <Logo/>
        <NavBar/>
      </div>
    );
  }

}

export default Hero;