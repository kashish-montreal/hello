import React from 'react'
import { useSelector } from 'react-redux'
export default function Display() {
    const data=useSelector((store)=>{return store})
  return (
    <div>
      <p>count is {data}</p>
    </div>
  )
}
