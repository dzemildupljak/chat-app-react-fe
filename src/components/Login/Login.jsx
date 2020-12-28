import React, { useEffect } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LocalStorageService from "../../services/localStorageService";
import * as Yup from "yup";
import "./Login.css";
import { login } from "../../actions/auth";

const Login = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();
  const dispatch = useDispatch();
  const localStorageService = LocalStorageService.getService();
  const accToken = localStorageService.getAccessToken();
  const refToken = localStorageService.getRefreshToken();

  const loginSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    username: Yup.string().required("Required"),
  });
  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  useEffect(() => {
    if (isAuthenticated) {
      return history.push("/chat");
    }
    if (accToken && refToken) {
      LocalStorageService.clearToken();
    }
  }, [accToken, refToken, isAuthenticated]);

  return (
    <div className="root">
      <div className="login-page">
        <div className="form">
          <Formik
            initialValues={{ username: "", password: "" }}
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
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
