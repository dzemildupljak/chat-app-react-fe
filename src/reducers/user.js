import {
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_LIST_SUCCESS,
  MESSAGE_RECEIVER,
} from "../actions/type";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER_SUCCESS: {
      return {
        ...state,
        currentUser: payload,
      };
    }
    case LOAD_USER_LIST_SUCCESS: {
      return {
        ...state,
        userList: payload,
      };
    }
    case MESSAGE_RECEIVER: {
      return {
        ...state,
        receiver: payload,
      };
    }
    case LOAD_USER_FAIL:
    default: {
      return {
        ...state,
      };
    }
  }
}
