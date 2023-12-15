import React, { useState } from 'react'

export default function List() {
    const[Data,setData]=useState(["Kashish","Jagadhri","Webcom","Ymr","Jai","Ho"])
   

  return (
    <div>
        <h1>fgygyggvg</h1>
        {
            Data.map((el,i)=>{
              return  <li>{el}</li>
            })
        }
    </div>
  )
}
