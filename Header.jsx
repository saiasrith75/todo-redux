import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="App-Header">
      <h1>My Application</h1>
      <Link to="home" className="App-Link">Home</Link>
      <Link to="login" className="App-Link">Login</Link>
    </div>
  );
}