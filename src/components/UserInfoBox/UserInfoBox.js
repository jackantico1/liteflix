import React, {Component} from 'react';
import './UserInfoBox.css';
import UserIcon from '../../assets/user-01@3x.png';

class UserInfoBox extends Component {

  render () {

    return (
        <div className="userInfoBox">
            <img src={UserIcon} alt="Usr" className="coloredOval"/>
            <p className="p">{this.props.displayText}</p>
        </div>
    );
  }

}

export default UserInfoBox;