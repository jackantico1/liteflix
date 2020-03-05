import React, {Component} from 'react';
import './Icon.css';
import BigIconLogo from '../../assets/plus@3x.png';

class Icon extends Component {

  render () {

    let icon = null
    if (this.props.type === "bigIcon") {
      icon = <div className={this.props.type}>
        <div className="oval">
          <img src={BigIconLogo} alt="+" className="plus"/>
        </div>
      </div>;
    } else {
      icon = <div className={this.props.type}>

      </div>;
    }

    return (
      <div className={this.props.type}>
        {icon}
      </div>
    );
  }

}

export default Icon;