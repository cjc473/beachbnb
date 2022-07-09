import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => { //revisit
  return (
    <div>
      greeting component
      {currentUser ? (
        <div>
          Welcome {currentUser.email}!
          <br />
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  )
}

export default Greeting;