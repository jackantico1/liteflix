import React, {Component} from 'react';
import './CollectionTitle.css';

class Collection extends Component {

  render () {

    return (
      <div className={this.props.collectionNum}>
        <h3>{this.props.CollectionTitle}</h3>
      </div>
    );
  }

}

export default Collection;