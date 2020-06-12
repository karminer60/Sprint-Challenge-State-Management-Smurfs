import React from 'react';
import './index.css';

import Smurf from './components/smurf.js';
import SmurfForm from './components/smurfForm.js'

export default function App() {
  return (
    <div className="App">
      <Smurf />
      <SmurfForm/>
    </div>
  );
}
