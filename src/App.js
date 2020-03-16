import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Collection from './components/Collection/Collection';
import Model from './components/Model/Model';

class App extends Component {

  state = {
    showUserMenu: false,
    showModel: false,
  }

  render () {

    const handleUserMenuClicked = () => {
      this.setState((state) => ({
        showUserMenu: !this.state.showUserMenu,
        showModel: false
      }));
    };

    const handlePlusClicked = () => {
      this.setState((state) => ({
        showUserMenu: false,
        showModel: !this.state.showModel
      }));
    };

    let HiddenItem;
    if (this.state.showModel) { 
      HiddenItem = <Model/>
    }

    return (
      <div className="App">
        {HiddenItem}
        <Hero showUserMenu={this.state.showUserMenu} handleUserMenuClicked={handleUserMenuClicked} handlePlusClicked={handlePlusClicked}/>
        <Collection collectionNum="collectionOne"/>
        <Collection collectionNum="collectionTwo"/>
      </div>
    );

  }
}

export default App;
