import React from 'react';
import './App.css';
import { Button } from './components/Button';

const day = 'Saturday';

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
