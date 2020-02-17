import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Collection from './components/Collection/Collection'

function App() {
  return (
    <div className="App">
      <Hero/>
      <Collection/>
      <Collection/>
    </div>
  );
}

export default App;
