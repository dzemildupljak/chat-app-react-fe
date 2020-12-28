import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT_SUCCESS,
  AUTH_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from "./type";
import AuthService from "../services/auth.service";
import LocalStorageService from "../services/localStorageService";
import { getUser } from "./user";

const localStorageService = LocalStorageService.getService();

export const register = (credentials) => (dispatch) => {
  return AuthService.register(credentials).then(
    () => {
      dispatch({
        type: REGISTER_USER_SUCCESS,
      });
    },
    (error) => {
      dispatch({
        type: REGISTER_USER_FAIL,
      });
    }
  );
};

export const login = (credentials) => (dispatch) => {
  return AuthService.login(credentials).then(
    (data) => {
      localStorageService.setToken(data);
      dispatch({
        type: LOGIN_SUCCESS,
      });
      dispatch(getUser());
    },
    (error) => {
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  );
};

export const authUser = () => (dispatch) => {
  dispatch({
    type: AUTH_USER,
  });
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOG_OUT_SUCCESS,
  });
};
