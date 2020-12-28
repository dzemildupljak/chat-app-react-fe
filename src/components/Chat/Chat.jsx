import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MessageForm from "../MessageForm/MessageForm";
import messageService from "../../services/message.service";
import "./Chat.css";
import axios from "axios";
const API_URL = process.env.REACT_APP_SERVER_URL;

const Chat = (props) => {
  const [messages, setMessages] = useState([]);
  const receiver = useSelector((state) => state.user.receiver);
  const sender = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    if (receiver && sender) {
      // const msgsgs = messageService.getAllMessages(sender.id, receiver);
      axios
        .get(API_URL + "api/message-list/" + receiver + "/" + sender.id)
        .then((res) => {
          setMessages(res.data);
        });
    }
    console.log(messages);
  }, [sender, receiver]);

  return (
    <div className="col-8 px-0">
      <div className="bg-gray px-4 py-2 bg-light recent">
        <p>Not yet loaded current user</p>
      </div>
      <div className="px-4 py-5 chat-box bg-white">
        {receiver ? (
          messages.length > 0 ? (
            messages.map((m) => {
              if (m.sender === sender.id) {
                return (
                  <div className="media w-50 ml-auto mb-3" key={m.id}>
                    <div className="media-body">
                      <div className="bg-primary rounded py-2 px-3 mb-2">
                        <p className="text-small mb-0 text-white">
                          {m.message}
                        </p>
                      </div>
                      <p className="small text-muted">12:00 PM | Aug 13</p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="media w-50 mb-3" key={m.id}>
                    <img
                      src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
                      alt="user"
                      width="50"
                      className="rounded-circle"
                    />
                    <div className="media-body ml-3">
                      <div className="bg-light rounded py-2 px-3 mb-2">
                        <p className="text-small mb-0 text-muted">
                          {m.message}
                        </p>
                      </div>
                      <p className="small text-muted">12:00 PM | Aug 13</p>
                    </div>
                  </div>
                );
              }
            })
          ) : (
            <h2>Nemate poruka sa ovim korisnikom</h2>
          )
        ) : (
          <h1>Nije odabran primalac</h1>
        )}
      </div>
      <MessageForm />
    </div>
  );
};

export default Chat;
