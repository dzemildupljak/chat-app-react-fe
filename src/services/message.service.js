import axios from "axios";

const API_URL = process.env.REACT_APP_SERVER_URL;

const getAllMessages = async (sender, receiver) => {
  return await axios
    .get(API_URL + "api/message-list/" + receiver + "/" + sender)
    .then((res) => {
      console.log("res from gtAllMessages", res.data);
      return res.data;
    });
};

const createMessage = async (msg) => {
  const res = await axios
    .post(API_URL + "api/message/", msg)
    .then((res) => console.log("Success create message"))
    .catch((err) => console.log("Error crate message"));
  return res;
};

export default {
  createMessage,
  getAllMessages,
};
