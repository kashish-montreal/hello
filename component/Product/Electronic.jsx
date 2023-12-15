import React from 'react'
import { useEffect,useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
export default function Electronic() {
const[ state,setState]=useState([])
    useEffect(()=>{  
    fetch("https://fakestoreapi.com/products/category/electronics")
        .then((res)=> 
            res.json())
           .then((data)=>{
           console.log(data);
         setState(data);
         
           });
        
    },[])
  
  return (

    <div>
      <h2 style={{color:"black"}}>Electronic</h2>
      
    <p>{state.map((el,i)=>{
       return<>
        <NavLink to={`/productdetail/${el.id}`} style={{color:"blue"}} key={i}>{el.title}</NavLink>
        </>
    })}</p>

    
    </div>
  )
}
