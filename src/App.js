import React from 'react';
import './App.css';

const day = 'Saturday';

function Button(props) { // function Button({ label, color })
  // const { label } = props;
  return (
    <button>{props.label}</button>
  );
}
Button.defaultProps = {
  label: 'Enter label for button'
}

function App() {
  // JSX
  return (
    <div className="App">
      <p>Hello!!</p>
      <p>{day}</p>
      <Button label="Don't click me" color="blue" />
      <Button label="Click me!" />
      <Button />
    </div>
  );
}

export default App;
