import React, {Component} from 'react';
import './ButtonCollection.css';

class ButtonCollection extends Component {

  render () {
    return (
      <div className="ButtonCollection">
          <button>Click me!</button>
          <button>No, click me!!</button>
      </div>
    );
  }

}

export default ButtonCollection;