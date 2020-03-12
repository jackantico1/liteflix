import React, {Component} from 'react';
import './InfoInput.css';

class InfoInput extends Component {

  render () {

    return (
        <div className="infoInput">
            <p>{this.props.displayText}</p>
            <h3>Enter info here</h3>
            <div className="line"/>
        </div>
    );
  }

}

export default InfoInput;