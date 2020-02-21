import React, {Component} from 'react';
import './Card.css';

class Card extends Component {

  render () {
    return (
      <div className={this.props.cardType}>
          <h1>Hi!</h1>
      </div>
    );
  }

}

export default Card;