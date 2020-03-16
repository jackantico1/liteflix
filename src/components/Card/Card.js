import React, {Component} from 'react';
import './Card.css';

class Card extends Component {

  render () {
    return (
      <div className={this.props.cardType}>
        <img src={this.props.imageSource} alt="Title" className="image"/>
      </div>
    );
  }

}

export default Card;