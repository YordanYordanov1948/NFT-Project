import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";

function Logo({ type }) {
  return (
    <div>
      <Image src={logo} />
    </div>
  );
}

export default Logo;
