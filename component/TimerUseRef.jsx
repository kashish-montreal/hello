import React from 'react'
import { useState,useEffect,useRef } from 'react'
export default function TimerUseRef() {
    const[state,setState]=useState(0)
    const id=useRef(null);
    
    function start(){
     id.current= setInterval(()=>{

        
        setState((prev)=>prev+1)
      },1000)
    }
 

    function stop(){
      clearInterval(id.current)
    }

    function Reset(){
        clearInterval(id.current);
        setState(0);
    }
  return (
    <div>
        <p>{state}</p>
      <button onClick={start}>Start</button>
     
      <button onClick={stop}>Stop</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

