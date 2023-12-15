import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function ProductDetail() {
    const {id}=useParams()
    const[state,setState]=useState({})
    useEffect(()=>{  
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res)=> 
                res.json())
               .then((data)=>{
               console.log(data);
             setState(data);
             console.log("cbsbd",data)
             
               })
            },[])
  return (
    <div>
      <h2>Product Detail</h2>
<img src={state.image} alt="" />
<h1>{state.title}</h1>
<p>{state.price}</p>
    </div>
  )
}
