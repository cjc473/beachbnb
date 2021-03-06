import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const configureStore = (state = {}) => (
  createStore(rootReducer, state, applyMiddleware(thunk, logger))); //revisit and use configureStore

export default configureStore;