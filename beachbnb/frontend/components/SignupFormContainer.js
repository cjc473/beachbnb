import { connect } from "react-redux";
// import SessionForm from "./SessionForm";
import SignupForm from "./SignupForm";
import React from "react";
import { signup } from "../actions/session_actions";
import { closeModal } from "../actions/modal_actions";
import { removeSessionErrors } from "../actions/session_actions";

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: "signup"
})

const mDTP = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  switchModal: (
    <button onClick={() => dispatch(openModal("login"))}>
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
  removeSessionErrors: () => dispatch(removeSessionErrors())
})

export default connect(mSTP, mDTP)(SignupForm)