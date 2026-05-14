import { useState , useCallback,useEffect} from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(1);
  const [count1,setCount1] = useState(1);
  const [hi, sethi] = useState('hi');


  const value = useCallback (()=>{
    setCount(count + 1);
    setCount1(count1 + 1);
  },[count,count1])
 
  const hlo = () => {
    sethi ("hi count1 change")
  }
  useEffect (()=> {
    console.log('count1 change');
   if (count1 > 1) {
    hlo()
   }
  },[count1])
  
  return (
    <div>
    <h1>count = {count}</h1>
    <h1>count = {count1}</h1>
    <button onClick = {value}> click </button>
    <p> {hi}</p>
    </div>
    
  )
}

export default App
