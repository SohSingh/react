import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    UserName : "sohan",
    age: 21
  }
  let newArr= [1,2,3]
  
  const addValue = () => {
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
  }
  
  const decValue = () => {
    setCount(count => count - 1)
    setCount(count => count - 1)
    setCount(count => count - 1)
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>counter</h1>
      {/* <section>
        <Card username="chaiaurcode" btnText = "clickme"/>
        <Card username="sohan"/>
     
      </section> */}
      <h2>{count}</h2> 
      <button onClick={addValue}>add</button>
      
      <button onClick={decValue}>sub</button>

    </>
  )
}

export default App
