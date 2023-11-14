import { useState } from 'react'
import './App.css'
import HomePage from './HomePage Components/HomePage'
import Main from './SearchRecipes/Maim'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage/>
    <Main/>

    </>
  )
}

export default App
