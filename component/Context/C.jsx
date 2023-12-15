import React, { useContext } from 'react'
import { myContext } from './Context';

export default function () {
const data=useContext(myContext);
  return (
    <div>
      <h2>C comp</h2>
      <p>{data.name}</p>
      <p>{data.Gender}</p>
    </div>
  )
}
