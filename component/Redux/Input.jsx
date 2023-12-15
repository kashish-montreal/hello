import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { nameAction } from './Action';

export default function input() {
    const[state,setState]=useState("");
    const dispatch=useDispatch()
    function inputText(e){
        setState(e.target.value);
        
    }
    
    function display(){
       dispatch(nameAction(state))
        
    }
  return (
    <div>
      <input type="text" id="txt" onChange={inputText} ></input>
      <button onClick={display}>Submit</button>

    </div>
  )
}
