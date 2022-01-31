import React from "react";
import User from "../user/User";

export default function Collector({ name, avatar, verified, nftsCount }) {
  return (
    <div className="container">
      <User name={name} avatar={avatar} verified={verified} info={nftsCount} />
    </div>
  );
}
