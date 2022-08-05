import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const RouteWrapper = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default RouteWrapper;
