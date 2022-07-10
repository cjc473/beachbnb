import { connect } from "react-redux";
import { logout, login } from "../actions/session_actions";
import { openModal } from "../actions/modal_actions";
import Greeting from "./Greeting";

const mSTP = ({entities, session}) => ({
  currentUser: entities.users[session.id]
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(Greeting)