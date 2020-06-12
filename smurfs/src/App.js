import React from 'react';
import './index.css';

import SmurfList from './components/smurfList.js';
import SmurfForm from './components/smurfForm.js'

export default function App() {
  return (
    <div className="App">
      <h1>Smurf Village</h1>
      <SmurfList/>
      <SmurfForm/>
    </div>
  );
}
