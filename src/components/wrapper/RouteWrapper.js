import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const RouteWrapper = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "cardData/fetchRequested" });
  }, []);

  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default RouteWrapper;
