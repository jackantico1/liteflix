import React, {Component} from 'react';
import './NavBar.css';
import NavItem from '../NavItem/NavItem'

const mainItems = [{displayText: "Inicio"}, {displayText: "Series"}, {displayText: "Pelícualas"}, {displayText: "Agregados recientemente"}, {displayText: "Mi lista"}];
const secondaryItems = [{displayText: "Ninos"}];

class NavBar extends Component {

  render () {
    let items = null
    if (this.props.type === 'main') {
      items = mainItems.map(item=><NavItem {...item}/>)
    } else {
      items = secondaryItems.map(item=><NavItem {...item}/>)
    }

    return (
      <div className={this.props.className}>
        {items}
      </div>
    );
  }

}

export default NavBar;