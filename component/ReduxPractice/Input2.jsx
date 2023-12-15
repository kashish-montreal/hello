import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NameAction } from './Action2';

export default function Input2() {
    const[state,setState]=useState("")
    const dispatch=useDispatch()
    function inputText(e){
        setState(e.target.value);
    }
    
    function display(){
        NameAction(state,dispatch)
        
    }
  return (
    <div>
 <input type="text" id="txt" onChange={inputText}></input>
      <button onClick={display}>Submit</button>
      
    </div>
  )
}
