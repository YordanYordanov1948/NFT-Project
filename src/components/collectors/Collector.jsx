import React from "react";
import User from "../user/User";

export default function Collector({ props }) {
  return (
    <div className="container">
      <User
        name={props.name}
        avatar={props.avatar}
        verified={props.verified}
        info={props.nftsCount}
      />
    </div>
  );
}
