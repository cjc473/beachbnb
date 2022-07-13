import { connect } from "react-redux";
// import SessionForm from "./SessionForm";
import LoginForm from "./LoginForm";
import React from "react";
import { login } from "../actions/session_actions";
import { closeModal } from "../actions/modal_actions";
import { removeSessionErrors } from "../actions/session_actions";

const mSTP = ({errors}) => ({
  errors: errors.session,
  formType: "login"
})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  switchModal: (
    <button onClick={() => dispatch(openModal("signup"))}>
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  removeSessionErrors: () => dispatch(removeSessionErrors())
})

export default connect(mSTP, mDTP)(LoginForm)