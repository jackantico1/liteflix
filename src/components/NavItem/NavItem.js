import React, {Component} from 'react';
import './NavItem.css';

class NavItem extends Component {

  render () {
    return (
      <div className="NavItem">
        {/* Need to figure out way to get this text smaller so it's not as big */}
        <p>{this.props.displayText}</p>
      </div>
    );
  }

}

export default NavItem;