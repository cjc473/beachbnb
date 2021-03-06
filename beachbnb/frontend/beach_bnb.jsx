import React from "react";
import ReactDOM from "react-dom";
import { login } from "./actions/session_actions";
import Root from "./components/root";
import configureStore from "./store/store"


document.addEventListener("DOMContentLoaded", () => {

  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
  // ReactDOM.render(<h1>testing heroku</h1>, root);


  //testing

  window.getState = store.getState;
  window.dispatch = store.dispatch;
});