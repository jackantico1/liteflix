import React, {Component} from 'react';
import './Icon.css';

class Icon extends Component {

  render () {
    return (
      <div className={this.props.type}>
      </div>
    );
  }

}

export default Icon;