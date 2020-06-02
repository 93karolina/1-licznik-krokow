import React from 'react';
import './App.css';

import Heading from "./Heading";
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading text="React Counter" />
      </header>

      <Counter initValue={55}/>
      
    </div>
  );
}

export default App;
