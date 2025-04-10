import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div>
        <h3>Login Form</h3>
        <p><input placeholder="Email address"></input></p>
        <p><input type="password" placeholder="Email address"></input></p>
   <button>Log In</button>
   <hr></hr>
   <Link to="/register">Create Account</Link>
    </div>
  )
}