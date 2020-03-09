import React, {Component} from 'react';
import './TextBox.css';

class TextBox extends Component {

  render () {
    return (
      <div className={this.props.type}>
          <h1>{this.props.displayText}</h1>
          <h1>{this.props.subText}</h1>
      </div>
    );
  }

}

export default TextBox;