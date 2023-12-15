import React, { useState } from 'react'
import Child from './Child'

export default function Loooks() {
    const[state,setState]=useState("no data");
    const[input,setInput]=useState("")
    function display(){
setState(input)
    }

function InputText(event){
      setInput(event.target.value)
}
  return (
    <div>
      <input type="text" onChange={InputText}/>
      <button onClick={display}>click</button>
      <Child data={state}/>
    </div>
  )
}
