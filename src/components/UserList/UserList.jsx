import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../actions/auth";
import { getUserList, setReceiver } from "../../actions/user";
import "./UserList.css";

function UserList(props) {
  const [active, setActive] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const userList = useSelector((state) => state.user.userList);
  const history = useHistory();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
    history.push("/");
  };
  const setReceverUser = (recId) => {
    dispatch(setReceiver(recId));
  };

  useEffect(() => {
    dispatch(getUserList());
    console.log("useEffect from userLIST!!!!");
  }, []);

  return (
    <div className="col-4 px-0">
      <div className="bg-white">
        <div className="bg-gray px-4 py-2 bg-light recent">
          <p>
            {currentUser ? currentUser.username : "Not yet loaded current user"}
          </p>
          <button className="btn" onClick={() => logOut()}>
            Log out
          </button>
        </div>

        <div className="messages-box">
          <div className="list-group rounded-0">
            {userList ? (
              userList.map((u) => (
                <a
                  className={`list-group-item list-group-item-action list-group-item-light rounded-0 ${
                    active ? "active" : ""
                  }`}
                  key={u.id}
                  onClick={() => {
                    setReceverUser(u.id);
                  }}
                >
                  <div className="media">
                    <img
                      src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
                      alt="user"
                      width="50"
                      className="rounded-circle"
                    />
                    <div className="media-body ml-4">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <h6 className="mb-0">{u.username}</h6>
                        <small className="small font-weight-bold">14 Dec</small>
                      </div>
                      <p className="font-italic text-muted mb-0 text-small">
                        Lorem ipsum dolor sit amet, consectetur. incididunt ut
                        labore.
                      </p>
                    </div>
                  </div>
                </a>
              ))
            ) : (
              <p>Not yed loaded userList</p>
            )}
            {/* <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-light rounded-0"
            >
              <div className="media">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
                  alt="user"
                  width="50"
                  className="rounded-circle"
                />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6>
                    <small className="small font-weight-bold">14 Dec</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">
                    Lorem ipsum dolor sit amet, consectetur. incididunt ut
                    labore.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-light rounded-0"
            >
              <div className="media">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
                  alt="user"
                  width="50"
                  className="rounded-circle"
                />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6>
                    <small className="small font-weight-bold">14 Dec</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">
                    Lorem ipsum dolor sit amet, consectetur. incididunt ut
                    labore.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-light rounded-0"
            >
              <div className="media">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
                  alt="user"
                  width="50"
                  className="rounded-circle"
                />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6>
                    <small className="small font-weight-bold">14 Dec</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">
                    Lorem ipsum dolor sit amet, consectetur. incididunt ut
                    labore.
                  </p>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-light rounded-0"
            >
              <div className="media">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
                  alt="user"
                  width="50"
                  className="rounded-circle"
                />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6>
                    <small className="small font-weight-bold">9 Nov</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">
                    consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </p>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-light rounded-0"
            >
              <div className="media">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
                  alt="user"
                  width="50"
                  className="rounded-circle"
                />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6>
                    <small className="small font-weight-bold">18 Oct</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-light rounded-0"
            >
              <div className="media">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
                  alt="user"
                  width="50"
                  className="rounded-circle"
                />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6>
                    <small className="small font-weight-bold">17 Oct</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">
                    consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore.
                  </p>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-light rounded-0"
            >
              <div className="media">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
                  alt="user"
                  width="50"
                  className="rounded-circle"
                />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6>
                    <small className="small font-weight-bold">2 Sep</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </p>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-light rounded-0"
            >
              <div className="media">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
                  alt="user"
                  width="50"
                  className="rounded-circle"
                />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <h6 className="mb-0">Jason Doe</h6>
                    <small className="small font-weight-bold">30 Aug</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            </a>

            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-light rounded-0"
            >
              <div className="media">
                <img
                  src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg"
                  alt="user"
                  width="50"
                  className="rounded-circle"
                />
                <div className="media-body ml-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h6 className="mb-0">Jason Doe</h6>
                    <small className="small font-weight-bold">21 Aug</small>
                  </div>
                  <p className="font-italic text-muted mb-0 text-small">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                </div>
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
