import React, {Component} from 'react';
import './TextBox.css';

class TextBox extends Component {

  render () {
    return (
      <div className="TextBox">
          <h1>{this.props.displayText}</h1>
      </div>
    );
  }

}

export default TextBox;