import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Collection from './components/Collection/Collection';
import Model from './components/Model/Model';

class App extends Component {

  render () {

    //This is where we need to use state, I just don't know how to use it yet
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
