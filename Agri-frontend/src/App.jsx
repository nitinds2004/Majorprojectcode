import { useState } from 'react'
import './App.css'
import Consumer from './pages/Consumer/Consumer'
import Former from './pages/Former/Former'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Consumer/> */}
    <Former/>
    </>
  )
}

export default App
