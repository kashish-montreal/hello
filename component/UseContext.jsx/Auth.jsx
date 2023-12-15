import React, { useContext, useState } from 'react'
import Login from './Login'
import Home from './Home'
import { loginContext } from './Context'

export default function Auth() {
  const {state}=useContext(loginContext)
  return (
    <div>
      {
        state. loggedIn ?<Home/>:<Login/>
      }
    </div>
  )
}
