import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { loginContext } from './UseContext.jsx/Context'

export default function Navbar() {
  const {state}=useContext(loginContext)
    var navbarStyle={
        background:"black",
        fontSize:"32px",
        marginTop:"10px",
        textAlign:"right",
        
    }
    var aStyle={
        padding:"5px",
        textDecoration:"None",
        color:"white",marginLeft:"20px"

    }
  return (
    <div style = {navbarStyle}>
  <Link to="/counter"style= {aStyle}>Counter</Link>
  <Link to="/todo" style= {aStyle}>Todo</Link>
  <Link to="/timer" style= {aStyle}>Timer</Link>
  <Link to="/product" style= {aStyle}>Product</Link>
  <span style = {aStyle}>{state.user}</span>


    </div>
  )
}
// link and navlink difference