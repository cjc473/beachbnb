import React from "react";

const Greeting = ({ currentUser, logout, openModal, login }) => { //revisit

  const demoLogin = () => {
    const user = {email: "password@password.com", password: "password"};
    login(user);
  }

  return (
    <div className="greeting">
      <button className="session-button" id="logo-text" onClick={() => {}}>beachbnb</button>
      {currentUser ? (
        <div>
          <br />
          <button onClick={logout} className="session-button">Logout</button>
        </div>
      ) : (
        <div>
            <button className="session-button" onClick={() => demoLogin()}>Demo</button>
            <button className="session-button" onClick={() => openModal('login')}>Log in</button>
            <button className="session-button" onClick={() => openModal('signup')}>Sign up</button>
        </div>
      )}
    </div>
  )
}

export default Greeting;