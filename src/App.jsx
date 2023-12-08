import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Keys from './components/Keys'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Display/>
      
    </>
  )
}

export default App
