import React, {Component} from 'react';
import './Collection.css';
import Card from '../Card/Card';

// const mainItems = [{displayImage: "Inicio"}, {displayImage: "Series"}, {displayImage: "Pelícualas"}, {displayText: "Agregados recientemente"}];

// const secondaryItems = [{displayImage: "Inicio"}, {displayImage: "Series"}, {displayImage: "Pelícualas"}, {displayImage: "Agregados recientemente"}];

class Collection extends Component {

  render () {

    let cardType = ""
    let collectionContainerType = ""
    let collectionTitleType = ""
    let collectionTitle = ""
    if (this.props.collectionNum === "collectionOne") {
        cardType = "smallCard"
        collectionContainerType = "collectionContainerOne"
        collectionTitleType = "collectionTitleOne"
        collectionTitle = "Proximante"
    } else {
        cardType = "largeCard"
        collectionContainerType = "collectionContainerTwo"
        collectionTitleType = "collectionTitleTwo"
        collectionTitle = "POPULARES DE LITEFLIX"
    }

    return (
      <div className={collectionContainerType}>
        <p className={collectionTitleType}>{collectionTitle}</p>
        <div className={this.props.collectionNum}>
          <Card cardType={cardType}/>
          <Card cardType={cardType}/>
          <Card cardType={cardType}/>
          <Card cardType={cardType}/>
        </div>
      </div>
    );
  }

}

export default Collection;