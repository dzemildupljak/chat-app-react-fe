import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import messageService from "../../services/message.service";
import "./MessageForm.css";

function MessageForm(props) {
  const receiver = useSelector((state) => state.user.receiver);
  const sender = useSelector((state) => state.user.currentUser);

  const validationSchema = Yup.object({
    message: Yup.string().required("Cannot send empty message"),
  });
  const formik = useFormik({
    initialValues: {
      sender: "user1",
      receiver: "user2",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      createMessage(values);
      resetForm({ message: "" });
    },
  });
  const createMessage = async (m) => {
    // e.preventDefault();
    // setMessage(m);

    const msg = {
      sender: sender.id,
      receiver: receiver,
      message: m.message,
    };
    console.log(msg);
    messageService.createMessage(msg);
  };
  return (
    <form action="#" className="bg-light" onSubmit={formik.handleSubmit}>
      <div className="input-group">
        <input
          className="form-control rounded-0 border-0 py-4 bg-light"
          id="message"
          placeholder="Type a message"
          name="message"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        <div className="input-group-append">
          <button id="button-addon2" type="submit" className="btn btn-link">
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </form>
  );
}

export default MessageForm;
