import React from 'react';
import './App.css';

function App() {
  const value = 10;
  return (
    <div className="App">
      <header className="App-header">

        <button className="square" onClick={() => { alert('Hi') }}>
          {value}
        </button>

      </header>
    </div>
  );
}

export default App;
