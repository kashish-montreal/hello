import React from 'react'
import { useState,useEffect } from 'react'
export default function RndmUserUE() {
    const[state,setState]=useState([])
    const[color,setColor]=useState({bgColor:"black",textColor:"white"})


    useEffect(()=>{
        fetching();
    },[])
    function fetching(){
        fetch("https://randomuser.me/api/?results=100")
        .then((res)=>{
             res.json()
            .then((data)=>{
            console.log(data);
            setState({
                image:data.results[0].picture.medium,
                name:data.results[0].name.first,
                gender:data.results[0].gender
            });
        })
        })

    }
    function dark(Event){
      if(Event.target.checked){
      setColor({bgColor:"white",textColor:"black"})
      }
      else{
        setColor({bgColor:"black",textColor:"white"})
      }
    }
    return (
    <div style={{backgroundColor:color.bgColor,color:color.textColor}} >
        <span style={{display:"inline"}}><img src={state.image} alt="" style={{width:"250px", height:"300px"}}/>
        <h1>{state.name}</h1>
        <h3>{state.gender}</h3></span>
      <button onClick={fetching} style={{width:"150px",height:"80px", backgroundColor:"greenyellow"}}>Click to change data</button>
      <input type='checkbox' onChange={dark}/>Click for dark mode
    </div>
  )
}
