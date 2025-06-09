import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const addValue = () =>{
    if(counter<20){
      // counter = counter+1;
      // setCounter(counter+1)
      setCounter(counter => counter +1)
      setCounter(counter => counter +1)
      setCounter(counter => counter +1)
      // setCounter(counter+1)
      console.log("value added", counter);
      
    }
  }
  const decValue = () =>{
    if(counter>=1){
      // counter = counter-1;
      setCounter(counter-1)
      console.log("Value decreased", counter);

    }
  }
  return (
    <>
      <h1>This Counter Project</h1>
      <h2>Counter value is: {counter}</h2>
      <button
       onClick={addValue}
      >Add value</button>
      <br />
      <button onClick={decValue}>Decrease value</button>
      <br />
      <p>footer: {counter}</p>
    </>
  )
}

export default App
