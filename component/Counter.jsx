import React, { useState } from 'react';


export default function Counter() {
    const[state,setState]=useState(0)
2
    function update(){
        // console.log(state);
        // setState((prevState)=>prevState+1)
        // console.log(state);
        setState(state+1)
        setState(state+2)
        setState(state+3)
    }
  return (
    <div >
        <h1>{state}</h1>
  <button onClick={update}>click</button>
      
        
        

    </div>
  )
}
