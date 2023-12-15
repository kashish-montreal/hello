import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Changed } from './Action'

export default function Input() {
    const[state,setState]=useState(0)
    const dispatch=useDispatch()
    function clicked(){
        Changed(state,dispatch)
    }
  return(
  <div>
  <button onClick={clicked}>Click to count</button>
     </div>
  )
}
