import React from "react";
import UserList from "../components/UserList/UserList";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="row overflow-hidden bg-white root">
      <UserList />
      {props.children}
    </div>
  );
};

export default Layout;
