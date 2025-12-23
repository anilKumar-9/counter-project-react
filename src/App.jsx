import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter]=useState(1)

  const addValue = ()=>{
    setCounter((prev)=>prev+1);  
  }

  const removeValue =()=>{
    return setCounter((prev)=>prev-1)
  }

  return (
    <>
      <h1>Counter project using react</h1>
      <h3>Counter value : {counter}</h3>
      <button
      onClick={addValue}
      > Add Value {counter}</button> {" "}
      <button onClick={removeValue}> remove Value {counter}</button>
    </>
  )
}

export default App
