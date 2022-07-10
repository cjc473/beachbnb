import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, openModal }) => { //revisit
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
            <button onClick={() => openModal('login')}>Login</button>
            <button onClick={() => openModal('signup')}>Signup</button>
        </div>
      )}
    </div>
  )
}

export default Greeting;