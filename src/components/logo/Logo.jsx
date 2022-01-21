import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import logomuted from "../../../public/images/logo-muted.svg";

function Logo({ type }) {
  if (type) {
    return <Image src={logomuted} />;
  }
  return <Image src={logo} />;
}

export default Logo;
