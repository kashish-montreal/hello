import React, { useState } from 'react'
import Parent2 from './Parent2'

export default function Child2() {
    const [state,setState]=useState("no data")
  return (
    <div>
      <p>{state}</p>
      <Parent2 data={setState}/>
    </div>
  )
}
