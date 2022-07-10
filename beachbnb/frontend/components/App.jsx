import React from "react";
import GreetingContainer from "./GreetingContainer";
import { Route } from "react-router-dom";
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";
import { AuthRoute } from "../util/route_util";
import Modal from "./Modal";

const App = () => (
  <div>
    <Modal />
    <header>
      <GreetingContainer />
    </header>
{/* 
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} /> */}

  </div>
);

export default App;