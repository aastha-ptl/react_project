// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {Name} from "./components/Name.jsx"
import Cal from "./components/Cal.jsx"
import Greeting from "./components/Greeting.jsx"  
function App() {
  // const [count, setCount] = useState(0)
 let auth=true;
  return (
    
    <>
    <Name name="Aastha" age="18"/>
    <Name name="manshi" age="19"/>
    {/* {auth?<><Cal a="10" b="20"/>
      <Name name="Aastha" age="18"/></>:null} */}
      {auth && (<Cal a="10" b="20"/>)}   
    </>
    
  )
}



export default App
