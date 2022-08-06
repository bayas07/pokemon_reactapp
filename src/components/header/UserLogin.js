import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSliceActions } from "../../redux/features/auth/authSlice";
import "./UserLogin.css";

const UserLogin = ({ onShow }) => {
  const {
    isLoggedIn,
    userData: { name, email, picture },
  } = useSelector((state) => state.authData);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(authSliceActions.setLogOut());
  };

  return (
    <Fragment>
      {!isLoggedIn && (
        <button type="button" onClick={onShow} className="log-button">
          <span>Login</span>
        </button>
      )}
      {isLoggedIn && (
        <div className="user-profile">
          <img
            src={picture}
            className="user-image"
            alt={`${name}'s profile picture`}
          />
          <div className="user-name-email">
            <div>{name}</div>
            <div>{email}</div>
          </div>
          <div>
            <button type="button" className="log-button">
              <span onClick={signOutHandler}>Logout</span>
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default UserLogin;
