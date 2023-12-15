import { useState } from "react"
import React from 'react'

export default function ToDoList() {
    const[input,setInput]=useState("")
    const[state,setState]=useState([])


    function inputText(e){
        setInput(e.target.value);
    }
    
    function display(){
        setState([...state,input])
        return txt.value="";
        
    }
    function delet(index)
    {
      var a=state.filter((el,i)=>{
        return index!==i
      })
       setState(a);
        }
        function edit(index)   {
          var answer = prompt("Please enter your new text", state[index]);
        //     if answer= null{
        //       var a=state.filter((el,i)=>{
        //         return index!==i
        //       })
        //        setState(a);
        // }
        // else{
          var text=[...state]
          text[index]= answer;
          setState(text)
          
        }
        
    

  return (
    <div>
   
      <input type="text" id="txt" onChange={inputText}></input>
      <button onClick={display}>Submit</button>
      {
      state.map((el,i)=>{
              return <div> <li key={i}>{el}</li>
              <button onClick={()=>{edit(i)}}>Edit </button>
              <button onClick={()=>{delet(i)}}>Delete</button>
              </div>
            })
        }
    </div>
  )
}
