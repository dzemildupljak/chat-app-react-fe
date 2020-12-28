import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";

const appReducer = combineReducers({
  /* your app’s top-level reducers */
  auth,
  user,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === "LOG_OUT_SUCCESS") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
