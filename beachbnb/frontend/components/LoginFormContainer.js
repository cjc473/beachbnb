import { connect } from "react-redux";
import SessionForm from "./SessionForm";
import React from "react";
import { login } from "../actions/session_actions";
import { closeModal } from "../actions/modal_actions";

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
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(SessionForm)