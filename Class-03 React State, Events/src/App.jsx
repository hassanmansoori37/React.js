import './App.css'
import { use, useState } from 'react'
import Greeting from './components/Greeting';



function App() {
  let [count , setcount] = useState(0);

  

  function increase(){
    setcount(count + 1);
  }
  
  function decrease(){  
    setcount(count - 1);
  }

  function reset(){
    setcount(0);
  }

  

  return (
    <>
      <div>Hello World</div>
      <Greeting name="Hassan" />
      <p>you clicked: {count}</p>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <button onClick={reset}>Reset!</button>
    </>
  )
}

export default App
