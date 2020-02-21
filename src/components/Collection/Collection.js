import React, {Component} from 'react';
import './Collection.css';
import Card from '../Card/Card';

class Collection extends Component {

  render () {

    let cardType = ""
    if (this.props.collectionNum === "collectionOne") {
        cardType = "smallCard"
    } else {
        cardType = "largeCard"
    }

    return (
      <div className={this.props.collectionNum}>
        <Card cardType={cardType}/>
        <Card cardType={cardType}/>
        <Card cardType={cardType}/>
        <Card cardType={cardType}/>
      </div>
    );
  }

}

export default Collection;