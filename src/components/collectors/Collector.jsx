import React from "react";
import User from "../user/User";

export default function Collector({ type }) {
  return (
    <div className="container">
      <User type={type} />
    </div>
  );
}
