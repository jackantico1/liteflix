import React, {Component} from 'react';
import './InfoInput.css';

class InfoInput extends Component {

  render () {

    return (
        <div className="infoInput">
            <p>{this.props.displayText}</p>
            <h3>{this.props.inputtedInfo}</h3>
        </div>
    );
  }

}

export default InfoInput;