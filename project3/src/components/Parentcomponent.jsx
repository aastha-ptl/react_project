// import React from 'react'
import { useState } from 'react'
import Childcomponent from './Childcomponent'

const Parentcomponent = () => {
  const [name, setName] = useState("Username");
  const changeNameHandler = (value) => {
    // setName("Aastha");
    setName(value);
  };
  return (
    <>
      <div>Inside the parent component</div>
      <h1>Name:{name}</h1>
      {/* <button onClick={changeNameHandler}>Change Name</button> */}
      <Childcomponent onNameChange={changeNameHandler} />
    </>

  );
}

export default Parentcomponent