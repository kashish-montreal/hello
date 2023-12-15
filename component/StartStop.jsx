import React from 'react'
import { useState,useEffect } from 'react'
export default function StartStop() {
const[state,setState]=useState(0)
function start(){
    useEffect(()=>{
        setTimeout(()=>{
            setState((prev)=>prev+1)
        },1000)
    },[state])

}
function stopp(){
setState(state)
}
  return (
    <div>
      <button onClick={start}>Start</button>
      <h1>{state}</h1>
      <button onClick={stopp}>Stop</button>
    </div>
  )
}
