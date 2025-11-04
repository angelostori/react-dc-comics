import { useState } from 'react'
import dcLogo from './assets/img/dc-logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={dcLogo} alt="" />
    </>
  )
}

export default App
