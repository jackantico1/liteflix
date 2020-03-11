import React, {Component} from 'react';
import './Icon.css';
import PlusIcon from '../../assets/plus@3x.png';
import BellIcon from '../../assets/bell@3x.png';
import UserIcon from '../../assets/user-01@3x.png';
import ArrowIcon from '../../assets/arrow@3x.png';

class Icon extends Component {

  render () {



    let icon = null
    if (this.props.type === "plusIcon") {
      icon = <div className={this.props.type}>
        <div className="oval">
          <img src={PlusIcon} alt="+" className="plus"/>
        </div>
      </div>;
    } else if (this.props.type === "bellIcon") {
      icon = <div className={this.props.type}>
        <img src={BellIcon} alt="bell" className="bell">

        </img>
      </div>;
    } else if (this.props.type === "userIcon") {
      icon = <div className={this.props.type}>
        <img src={UserIcon} alt="user" className="user">

        </img>
      </div>;
    } else if (this.props.type === "arrowIcon") {
      icon = <div className={this.props.type}>
        <img src={ArrowIcon} alt="arrow" className="arrow" onClick={this.props.handleUserMenuClicked}>

        </img>
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