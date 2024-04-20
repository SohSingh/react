import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)
  
  // let counter = 15;

  const addValue = () => {
    if(counter < 20)
         setCounter(counter+1)
  };

  const RemoveValue = () => {
    if(counter > 0){
      setCounter(counter-1)
    }    
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value 5</h2>
    <button onClick={addValue}>Add value {counter}</button>
    <br />
    <button
    onClick={RemoveValue}>Decrease Value {counter}</button>
    <p>{counter}</p>
    </>
  )
}

export default App
