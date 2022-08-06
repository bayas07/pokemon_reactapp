import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import "./LoginComp.css";
import { authSliceActions } from "../../redux/features/auth/authSlice";

const LoginComp = ({ onClose, setOverlay }) => {
  const dispatch = useDispatch();
  const { clientId } = useSelector((data) => data.authData);

  useEffect(() => {
    /* global google */
    const handleCallbackResponse = (response) => {
      let userObject = jwtDecode(response.credential);
      dispatch(authSliceActions.setUserData(userObject));
      setDataInLocal("userData", userObject);
      setOverlay(false);
    };

    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("sign-in"), {
      theme: "outline",
      size: "large",
    });
  }, [clientId, dispatch, setOverlay]);

  let setDataInLocal = (name, data) => {
    let stringifiedData = JSON.stringify(data);
    localStorage.setItem(name, stringifiedData);
  };

  return (
    <div className="content-overlay">
      <FontAwesomeIcon
        icon={faClose}
        className="close-icon"
        onClick={onClose}
      />
      <div id="sign-in"></div>
    </div>
  );
};

export default LoginComp;
