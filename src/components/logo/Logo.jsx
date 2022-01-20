import React from "react";
import logo from "../../../assets/images/logo.svg";
import logomuted from "../../../assets/images/logo-muted.svg";

function Logo(props) {
  return (
    <div>
      <h1>hello</h1>
      <img src={logo} alt="logo" />
      <img src={logomuted} alt="logomuted" />
    </div>
  );
}

export default Logo;
