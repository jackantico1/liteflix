import React, {Component} from 'react';
import './NavBar.css';
import NavItem from '../NavItem/NavItem';
import Icon from '../Icon/Icon';

const mainItems = [{displayText: "Inicio", width: 40}, {displayText: "Series"}, {displayText: "Pelícualas"}, {displayText: "Agregados recientemente"}, {displayText: "Mi lista"}];
const secondaryItems = [{displayText: "Ninos"}];

class NavBar extends Component {

  render () {
    
    let items = null
    if (this.props.type === 'main') {
      items = mainItems.map(item=><NavItem {...item}/>)
    } else {
      items = secondaryItems.map(item=><NavItem {...item}/>)
      items.push(<Icon type="smallIcon"/>)
    }

    return (
      <div className={this.props.className}>
        {items}
      </div>
    );
  }

}

export default NavBar;