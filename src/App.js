import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Collection from './components/Collection/Collection';
import Model from './components/Model/Model';

class App extends Component {

  render () {

    let HiddenItem;
    if ((1 === 2)) {
      HiddenItem = <Model/>
    }

    return (
      <div className="App">
        {HiddenItem}
        <Hero showUserMenu={false}/>
        <Collection collectionNum="collectionOne"/>
        <Collection collectionNum="collectionTwo"/>
      </div>
    );

  }
}

export default App;
