import React from "react";
import logo from "../../../public/images/logo.svg";
import logomuted from "../../../public/images/logo-muted.svg";

function Logo({ type }) {
  if (type) {
    return <img src={logomuted} />;
  }
  return <img src={logo} alt="logo" />;
}

export default Logo;
