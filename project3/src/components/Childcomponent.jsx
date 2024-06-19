import React from 'react'

const Childcomponent = (props) => {
  return (
    <button onClick={()=>{
        props.onNameChange("Aastha");
    }}>Change Name</button>
  )
}

export default Childcomponent