import React from 'react'
import { useState,useEffect } from 'react'

export default function CountDownUF() {
    const[state,setState]=useState(10)

    useEffect(()=>{
        setInterval(()=>{
            setState((prev)=>prev-1)
        },1000)
    },[])
    if(state<0){
     setState(10)
    }
  return (
    <div>
      <h1>{state}</h1>
    </div>
  )
}
