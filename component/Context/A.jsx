import React, { useState } from 'react'
import B from './B'
import { myContext } from './Context'
export default function A() {
    const[state,setState]=useState({
        name:"kashish",
        number:"4578329",
        Gender: "male"
    })
  return (
    <div>
      <h1>A</h1>
      <p>{state.name}</p>
      <myContext.Provider value={state}>
        <B/>
      </myContext.Provider>
    </div>
  )
}
