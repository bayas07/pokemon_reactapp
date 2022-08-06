import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { authSliceActions } from "../../redux/features/auth/authSlice";
import Header from "../header/Header";

const RouteWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "cardData/fetchRequested" });
  }, [dispatch]);

  useEffect(() => {
    let userData = localStorage.getItem("userData");
    let parsedUserData = JSON.parse(userData);
    if (parsedUserData) {
      dispatch(authSliceActions.setUserData(parsedUserData));
    }
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default RouteWrapper;
