import React, {Component} from 'react';
import './NavItem.css';

class NavItem extends Component {

  render () {
    return (
      <div className="NavItem">
          <h3>{this.props.displayText}</h3>
      </div>
    );
  }

}

export default NavItem;