import React from 'react'
import { useSelector } from 'react-redux'

export default function Display2() {
    const data=useSelector((store)=>{return store})
    return (
      <div>
        <h1>Display</h1>
        <p>{data}</p>
      </div>
    )
}
