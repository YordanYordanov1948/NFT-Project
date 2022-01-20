import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import logomuted from "../../../public/images/logo-muted.svg";

function Logo() {
  return (
    <div>
      <Image src={logo} />
      <Image src={logomuted} />
    </div>
  );
}

export default Logo;
