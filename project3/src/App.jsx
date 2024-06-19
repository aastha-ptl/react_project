import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstcomponents from './components/Firstcomponents'
import Secondcomponents from './components/Secondcomponents'
import Parentcomponent from './components/Parentcomponent'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Firstcomponents />
    <br />
    <hr />
    <Secondcomponents />
    <hr />
    <Parentcomponent />
    </>
    
  )
}

export default App
