import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const value = 10;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <button className="square" onClick={() => { alert('Hi') }}>
          {value}
        </button>

      </header>
    </div>
  );
}

export default App;
