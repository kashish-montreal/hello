import React, { useContext, useState } from 'react'
import { loginContext } from './Context';

export default function Login() {
    const[state,setState]=useState({
        name:"",  password:""
    })

    const {fnLoggedIn}=useContext(loginContext)
    function Submit(){
    if(state.name=="kashish" && state.password=="0000"){
        fnLoggedIn({
            loggedIn:true,
            user:"kashish"
        })
     alert("Login Successful");
    }
else{
    alert("Invalid Credentials")
}}
  return (
    <div>
      
      <input type='text' id='name' onChange={(e)=>{{setState({
        ...state,
        name:e.target.value
      })}}}/>
    
      <input type='text' id='password'  onChange={(e)=>{{setState({
        ...state,
        password:e.target.value
      })}}}/>
      <button onClick={Submit}>Submit</button>
     
      
    </div>
  )

    }