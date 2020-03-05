import React, {Component} from 'react';
import './NavItem.css';

class NavItem extends Component {

  render () {
    return (
      <div className="NavItem">
        <p style={{width: `${this.props.width}`}}>{this.props.displayText}</p>
      </div>
    );
  }

}

export default NavItem;