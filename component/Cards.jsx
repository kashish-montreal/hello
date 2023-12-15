import React from 'react'

export default function Cards(props) {
  return (
     
     <div style={{marginLeft:"10px", boxShadow:" rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
    <img src={props.img} alt="" style={{width:"65%"}}/>
    <h1>{props.name}</h1>
    <p>{props.pro}</p>
</div>
  )
}