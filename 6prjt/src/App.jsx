import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter , setCounter] = useState(0) //usestate is hook use to update all value in code
  //let counter = 10
  const addValue = () => {
           setCounter(counter+1)
  }
  const delValue = () => {
    if (counter>0) {
   setCounter(counter-1)
  }}
  return (
    <>
      
    <h1>hlo</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addValue}>add value</button>
    <button onClick={delValue}>remove value</button>
      
    </>
  )
}

export default App
