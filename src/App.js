import React from 'react';
import './App.css';

const day = 'Saturday';

function Button(props) { // function Button({ label, color })
  // const { label } = props;
  return (
    // <button>{props.label}</button>
    <button>{props.children}</button>
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
      <Button color="blue">Don't click me</Button>
      <Button>Click me!</Button>
      <Button>Third button</Button>
    </div>
  );
}

//  <App>
//     <Header>
//       <Menu></Menu>
//     </Header>
//     <Main>
//       <div></div>
//       <div></div>
//       <div></div>
//     </Main>
//     <Footer></Footer>
//   </App>

export default App;
