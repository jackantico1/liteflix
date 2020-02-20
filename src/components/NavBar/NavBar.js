import React, {Component} from 'react';
import './NavBar.css';
import NavItem from '../NavItem/NavItem'

class NavBar extends Component {

  render () {
    return (
      <div className="NavBar">
        <NavItem displayText="Inicio"/>
        <NavItem displayText="Series"/>
        <NavItem displayText="Pelícualas"/>
        <NavItem displayText="Agregados recientemente"/>
        <NavItem displayText="Mi lista"/>
      </div>
    );
  }

}

export default NavBar;