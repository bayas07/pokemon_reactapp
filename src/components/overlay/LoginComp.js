import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons"
import React from "react";
import "./LoginComp.css";


const LoginComp = ({onClose}) => {
  return (
    <div className="content-overlay">
      <div>Login With Google</div>
      <FontAwesomeIcon icon={faClose} className="close-icon" onClick={onClose} />
    </div>
  );
};

export default LoginComp;