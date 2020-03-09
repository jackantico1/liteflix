import React, {Component} from 'react';
import './ActionButton.css';
import PlusIcon from '../../assets/plus@3x.png';
import PlayIcon from '../../assets/play@3x.png';

class ActionButton extends Component {

  render () {

    let actionButton = null
    if (this.props.type === "first") {
      actionButton = <div className="actionButton">
          <img src={PlayIcon} alt="+" className="img"/>
          <p className="p">{this.props.displayText}</p>
      </div>
    } else {
      actionButton = <div className="actionButton">
        <img src={PlusIcon} alt="+" className="img"/>
        <p className="p">{this.props.displayText}</p>
      </div>
    }

    return (
      actionButton
    );
  }

}

export default ActionButton;