import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from "../actions/type";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_USER_SUCCESS:
    case REGISTER_USER_FAIL: {
      return {
        ...state,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
      };
    }
    case AUTH_USER: {
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
