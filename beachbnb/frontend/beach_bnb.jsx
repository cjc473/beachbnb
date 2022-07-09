import React from "react";
import ReactDOM from "react-dom";
import { login } from "./actions/session_actions";
import Root from "./components/root";
import configureStore from "./store/store"


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.testUser1 = { email: "chris@gmail.com", password: "password" }
  window.testUser2 = {"email": "chris@gmail.com", "password": "password"}
  window.testUser3 = {email: "chris@gmail.com", password: "123456"}
  window.testUser4 = { "email": "chris@gmail.com", "password": "123456" }
  window.login = login
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});