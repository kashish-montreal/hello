import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletAction } from './Action';


export default function Display() {
   const data=useSelector((store)=>{return store.name})
   const dispatch=useDispatch();

   console.log(data);
//    function edit(i){
// dispatch(editAction)
//    }

function deleteTodo(id){
     dispatch(deletAction(id));
}
   
  return (
    <div>
      <h1>Display</h1>
      <p>{data.map((el,i)=>{
        return<>
         <li key={i}>{el}</li>
        {/* <button onClick={()=>{edit(i)}}>Edit </button> */}
        <button onClick={()=>deleteTodo(data.i)}>Delete</button>
        </>
      })}</p>   <br/>   
    
    </div>
  )
}
