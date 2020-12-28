import {
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_LIST_SUCCESS,
  MESSAGE_RECEIVER,
} from "./type";
import jwt_decode from "jwt-decode";
import UserService from "../services/user.service";
import LocalStorageService from "../services/localStorageService";

const localStorageService = LocalStorageService.getService();

export const getUser = () => (dispatch) => {
  const userToken = jwt_decode(localStorageService.getAccessToken());
  return UserService.getUser(userToken.user_id).then(
    (data) => {
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: data.data,
      });
    },
    (error) => {
      dispatch({
        LOAD_USER_FAIL,
      });
    }
  );
};

export const setReceiver = (recId) => (dispatch) => {
  return dispatch({
    type: MESSAGE_RECEIVER,
    payload: recId,
  });
};
  
export const getUserList = () => (dispatch) => {
  return UserService.getUserList().then((res) => {
    dispatch({
      type: LOAD_USER_LIST_SUCCESS,
      payload: res.data,
    });
  });
};
