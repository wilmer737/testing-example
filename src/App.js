import React, { useState, useEffect } from 'react';
import './App.css';
import getPokemonDefault from './getPokemon'

function App() {
  const [ count, countChange ] = useState(1)
  const [ pokName, changePokName] = useState('loading')
  function incrementCounter() {
    countChange(count + 1);
  }
  function decrementCounter() {
    const newCount = count - 1;
    if (newCount > 0) {
      countChange(count - 1);
    }
  }
  useEffect(() => {
    getPokemonDefault(count).then(({ name }) => {
      changePokName(name)
    });
  }, [count]);

  return (
    <div className="App">
      <button onClick={decrementCounter}>-</button>
      <div>{count} : {pokName}</div>
      <button className="increment" onClick={incrementCounter}>+</button>
    </div>
  );
}
export default App;
