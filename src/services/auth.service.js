import axios from "axios";
import LocalStorageService from "../services/localStorageService";
import "../services/axios";

const localStorageService = LocalStorageService.getService();

const API_URL = process.env.REACT_APP_SERVER_URL;

const register = async (credentials) => {
  const res = await axios.post(API_URL + "account/api/register", credentials);
  return res.data;
};

const login = async (credentials) => {
  const res = await axios.post(API_URL + "api/token/", {
    username: credentials.username,
    password: credentials.password,
  });
  return res.data;
};

const logout = () => {
  localStorageService.clearToken();
};

export default {
  register,
  login,
  logout,
};
