import React from 'react'
import { useState,useEffect } from 'react'
export default function SetTimoutUE() {
    const[state,setState]=useState(10)
    useEffect(()=>{
        setTimeout(()=>{
            setState((prev)=>prev-1)
        },1000)
    },[state])
  return (
    <div>
      <h1>{state}</h1>
    </div>
  )
}
