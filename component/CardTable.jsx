import React, { useEffect, useState } from 'react'

export default function CardTable() {
  const[state,setState]=useState("https://gradepowerlearning.com/wp-content/uploads/2018/12/Young-student-smiling-holding-books..jpeg")

  useEffect(()=>{
    console.log("mount phase");

    return(()=>{
      console.log("unmount phase");
      alert()
    })
  },[])
  return (
    <div>
<img src={state} alt="" style={{width:"25%"}}/>
    <h1>Artiii</h1>
    <p>Vakeel</p>
    <button onClick={()=>{setState("https://welcomepei.com/wp-content/uploads/2016/12/sunrise-jmacphoto-e1481830821718.jpg")}}>click to change photuu</button>
    </div>
  )

  }