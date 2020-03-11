import React, {Component} from 'react';
import './NavBar.css';
import NavItem from '../NavItem/NavItem';
import Icon from '../Icon/Icon';

const mainItems = [{displayText: "Inicio"}, {displayText: "Series"}, {displayText: "Pelícualas"}, {displayText: "Agregados recientemente"}, {displayText: "Mi lista"}];
const secondaryItems = [{displayText: "Niños"}];

class NavBar extends Component {

  render () {
    
    let items = null
    if (this.props.type === 'main') {
      items = mainItems.map(item=><NavItem {...item}/>)
    } else {
      items = secondaryItems.map(item=><NavItem {...item}/>)
      items.push(<Icon type="bellIcon"/>)
      items.push(<Icon type="userIcon"/>)
      items.push(<Icon type="arrowIcon" handleUserMenuClicked={this.props.handleUserMenuClicked}/>)
    }

    return (
      <div className={this.props.className}>
        {items}
      </div>
    );
  }

}

export default NavBar;