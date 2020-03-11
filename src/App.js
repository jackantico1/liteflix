import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Collection from './components/Collection/Collection';
import Model from './components/Model/Model';

class App extends Component {

  state = {
    showUserMenu: false,
    showModel: false
  }

  render () {

    const handleUserMenuClicked = () => {
      this.setState((state) => ({
        showUserMenu: !this.state.showUserMenu,
        showModel: false
      }));
    };

    // const handleAddButtonClicked = () => {
    //   this.setState((state) => ({
    //     showModel: true
    //   }));
    // };

    let HiddenItem;
    if (this.state.showModel) { 
      HiddenItem = <Model/>
    }

    return (
      <div className="App">
        {HiddenItem}
        <Hero showUserMenu={this.state.showUserMenu} handleUserMenuClicked={handleUserMenuClicked}/>
        <Collection collectionNum="collectionOne"/>
        <Collection collectionNum="collectionTwo"/>
      </div>
    );

  }
}

export default App;
