import React from 'react';
import './App.css';

const day = 'Saturday';

function Button() {
  return (
    <button>Click me!!!</button>
  );
}

function App() {
  // JSX
  return (
    <div className="App">
      <p>Hello!!</p>
      <p>{day}</p>
      <Button />
      <Button />
      <Button />
    </div>
  );
}

export default App;
