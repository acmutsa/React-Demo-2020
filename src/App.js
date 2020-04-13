import React from 'react';
import NumberPad from './NumberPad';
import Display from './Display';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display value={100} />
        <NumberPad />
      </header>
    </div>
  );
}

export default App;
