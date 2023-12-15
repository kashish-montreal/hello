import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <div>
      <h2>Product</h2>
      <div><Link to="electronic">Electronic</Link></div>
<div><Outlet/></div>
    </div>
  )
}
