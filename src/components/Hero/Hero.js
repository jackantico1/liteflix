import React, {Component} from 'react';
import './Hero.css';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import Icon from '../Icon/Icon';
import HeroInfo from '../HeroInfo/HeroInfo';
import UserMenu from '../UserMenu/UserMenu';

class Hero extends Component {

  render () {



    let HiddenItem;
    if (this.props.showUserMenu) {
      HiddenItem = <UserMenu/>
    }

    return (
      <div className="Hero">
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <Logo/>
          <NavBar type="main" className="main"/>
          <Icon type="bigIcon"/>
          <NavBar type="secondary" className="secondary" handleUserMenuClicked={this.props.handleUserMenuClicked}/>
          {HiddenItem}
        </div>
        <HeroInfo/>
        {/* Use opacity */}
      </div>
    );
  }

}

export default Hero;