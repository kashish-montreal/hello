
import React, { useState } from 'react'

export default function Parent2({data}) {
    const [input,setInput]=useState();

    function display(){
         data(input);
    }

  return (
    <div>
      <input type="text" onChange={(e)=>{setInput(e.target.value)}} />
      <button onClick={display}>click</button>
    </div>
  )
}
