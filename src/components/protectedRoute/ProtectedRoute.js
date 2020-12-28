import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authUser } from "../../actions/auth";
import { getUser } from "../../actions/user";
import LocalStorageService from "../../services/localStorageService";

const ProtectedRoute = ({ path, exact, Component }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const localStorageService = LocalStorageService.getService();
  const accToken = localStorageService.getAccessToken();
  const refToken = localStorageService.getRefreshToken();
  const dispatch = useDispatch();
  const accessRoute = () => {
    if (accToken && refToken) {
      dispatch(authUser());
      if (isAuthenticated) {
        dispatch(getUser());
      }
      return true;
    } else {
      return false;
    }
  };
  return (
    <Route
      exact={exact}
      path={path}
      render={(data) =>
        accessRoute() ? (
          <Component {...data} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
