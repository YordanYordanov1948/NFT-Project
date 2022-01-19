import React from "react";
import logo from "../../../assets/images/logo.svg";

function Logo(props) {
  return (
    <div>
      {props.type?.map((logo) => {
        return <img>{logo}</img>;
      })}
    </div>
  );
}

export default Logo;
