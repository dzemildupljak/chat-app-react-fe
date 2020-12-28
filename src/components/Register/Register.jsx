import React from "react";
import { Redirect, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LocalStorageService from "../../services/localStorageService";
import * as Yup from "yup";
import "./Register.css";
import { register } from "../../actions/auth";

const Register = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();
  const localStorageService = LocalStorageService.getService();

  const dispatch = useDispatch();

  const loginSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const handleSubmit = (values) => {
    console.log(values);
    dispatch(register(values)).then(() => {
      return <Redirect to="/chat" />;
    });
  };
  return (
    <div className="root">
      <div className="login-page">
        <div className="form">
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              first_name: "",
              last_name: "",
            }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => {
              return (
                <Form className="login-form">
                  <label>
                    Username: <Field type="text" name="username" />
                    <ErrorMessage name="username" component="div" />
                  </label>
                  <label>
                    Email: <Field type="text" name="email" />
                    <ErrorMessage name="email" component="div" />
                  </label>
                  <label>
                    Password:
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                  </label>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </Form>
              );
            }}
          </Formik>
          <p className="message">
            Registered? <Link to="/">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
