// import React from 'react'

import{useRef} from 'react'
import{useState} from 'react'
const Secondcomponents = () => {
    const inputRef = useRef(null);
    const [tasks, setTasks] = useState([]);
    const addNewTaskHnadler = () => {
        let Newtask = inputRef.current.value.trim();
        if(Newtask != ""){
            setTasks((prevTasks) => {
                return [...prevTasks, Newtask];
            });
        }
        
        inputRef.current.value = "";
        console.log(Newtask);
    }
  return (
    <>
    Enter your task: <input ref={inputRef} />
    <br />
    <button onClick={addNewTaskHnadler}>Add</button>
    {tasks.length===0?(<p>No taks are available </p>):
    
    (<div>
        {tasks.map((task,index) =>{
            return <li key={index}>{task}</li>
        })}
    </div>
    )}
    </>
  )
}

export default Secondcomponents