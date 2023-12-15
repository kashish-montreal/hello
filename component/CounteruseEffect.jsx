import React, { useEffect } from "react"
import { useState } from "react"

export default function CounteruseEffect() {
  
    const[state,setState]=useState(0);

    useEffect(()=>{
      document.title=`count is ${state}`
    })

    function update(){
    
      setState(state+1)
      
    }
  return (
    <div>
   
     <h1>{state}</h1>
  <button onClick={update}>click</button>
    </div>
  )
}
