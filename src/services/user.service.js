import axios from "axios";
import LocalStorageService from "../services/localStorageService";

const localStorageService = LocalStorageService.getService();

const API_URL = process.env.REACT_APP_SERVER_URL;

const getUser = async (user_id) => {
  const user = await axios.get(API_URL + "account/api/user-list/" + user_id);
  return user;
};

const getUserList = async () => {
  const userList = await axios.get(API_URL + "account/api/user-list/");
  return userList;
};

export default {
  getUser,
  getUserList,
};
