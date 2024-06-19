

 import "./App.css";
 import { useState } from "react";
function App() {
  // const [count, setCount] = useState(0)
  const [a, setA] = useState(0);
  const [visible, setVisible] = useState(true);
  
  const increment = () => {
    // a=a+1;
    setTimeout(() => {setA((current) => current + 1);
      console.log(a);}, 3000);
    
  };
  const Decr=()=>{
    setA(a-1);  
  } 
  const reset=()=>{
    setA(0);
  }
  // let visible = true;
  const toggle = () => {
    if (visible) {
      setVisible(false);  
    }
    else {
      setVisible(true);
    }  
  } 
     return (
    <>
      {/* <h1>hello</h1>
      <div>{a}</div> */}
      <h1>Counter</h1>
      {visible && <p>{a}</p>}
      <button onClick={increment}>Increment</button>
      <button onClick={Decr}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={toggle}>Toggle</button>
      
    </>
  )

}

export default App;
