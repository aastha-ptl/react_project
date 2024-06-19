// import React from 'react'
import{useState} from 'react'
const Firstcomponents = () => {

    const [text, setText] = useState("");
    const inputchangehandler = (event) => {
        console.log("function called ");
        console.log(event.target.value);
        setText(event.target.value);
    }
        return (
            <>
                Enter your name: <input onChange={inputchangehandler} />
                <br />
                {text}
            </>
        );
    };


export default Firstcomponents