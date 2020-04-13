import React, { useState } from 'react';
import NumberPad from './NumberPad';
import Display from './Display';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  const valueHandler = (number) => {
    if (value >= 1000)
      return;
    setValue(value * 10 + number);
  }

  const clearHandler = () => {
    setValue(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Display value={value} />
        <NumberPad onValueChange={valueHandler} onClear={clearHandler} />
      </header>
    </div>
  );
}

export default App;
