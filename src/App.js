import React from 'react';
import './App.css';
import Base from './components/Base/Base';

{/*

  App
  |__Header
  | |__Logo
  | |__Menu items
  | |__Add icon
  | |__Bell icon
  | |__Settings icon
  |__Body
  | |__Home card
  | |__Small cards
  | |__Large cards
  | |__Button

*/}

function App() {
  return (
    <div className="App">
      <Base/>
    </div>
  );
}

export default App;
