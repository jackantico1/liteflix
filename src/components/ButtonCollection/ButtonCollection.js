import React, {Component} from 'react';
import './ButtonCollection.css';
import ActionButton from '../ActionButton/ActionButton';

const itemsData = [{displayText: "Reproducir", type: "first"}, {displayText: "Mi Lista", type: "second"}];

class ButtonCollection extends Component {

  render () {

    let items = itemsData.map(item=><ActionButton {...item}/>)

    return (
      <div className="ButttonCollection">
          {items}
      </div>
    );
  }

}

export default ButtonCollection;