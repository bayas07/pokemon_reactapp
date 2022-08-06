import React, { useState, Fragment } from "react";
import { createPortal } from "react-dom";
import BackgroundOverlay from "../overlay/BackgroundOverlay";
import LoginComp from "../overlay/LoginComp";
import UserLogin from "./UserLogin";
import SearchBar from "../searchbar/SearchBar";
import "./Header.css";

const Header = () => {
  const [overlay, setOverlay] = useState(false);

  const onShowHandler = () => {
    setOverlay(true);
  };
  const onCloseHandler = () => {
    setOverlay(false);
  };
  return (
    <header>
      <div className="header-inner">
        <SearchBar />
        {<UserLogin onShow={onShowHandler} />}
      </div>
      {overlay && (
        <Fragment>
          {createPortal(
            <BackgroundOverlay onClose={onCloseHandler} />,
            document.getElementById("overlay-bg-root")
          )}
          {createPortal(
            <LoginComp onClose={onCloseHandler} setOverlay={setOverlay} />,
            document.getElementById("overlay-root")
          )}
        </Fragment>
      )}
    </header>
  );
};

export default Header;
