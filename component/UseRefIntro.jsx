import React, { useState } from 'react'

export default function UseRefIntro() {
    const[state,setState]=useState({
        name:"", number:"", password:""
    })

function Submit(){
    console.log(
        state
    )
}
    
  return (
    <div>
      <input type='text' id='name' onChange={(e)=>{{setState({
        ...state,
        name:e.target.value
      })}}}/>
      <input type='text' id='number'  onChange={(e)=>{{setState({
        ...state,
        number:e.target.value
      })}}}/>
      <input type='text' id='pasdsword'  onChange={(e)=>{{setState({
        ...state,
        password:e.target.value
      })}}}/>
      <button onClick={Submit}>Submit</button>
    </div>
  )
}
