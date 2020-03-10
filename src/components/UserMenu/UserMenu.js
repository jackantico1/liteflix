import React, {Component} from 'react';
import './UserMenu.css';
import UserInfoBox from '../UserInfoBox/UserInfoBox'

const itemsData = [{displayText: "Ernesto G..."}, {displayText: "User 03"}, {displayText: "User 04"}];

class UserMenu extends Component {

  render () {

    let items = itemsData.map(item=><UserInfoBox {...item}/>)
    items.push(<p className="userMenuLabel">Configuracíon</p>)
    items.push(<div className="blackLine"></div>)
    items.push(<p className="userMenuLabel">Ayuda</p>)
    items.push(<div className="blackLine"></div>)
    items.push(<p className="userMenuLabel">Logout</p>)

    return (
        <div className="userMenu">
            {items}
        </div>
    );
  }

}

export default UserMenu;