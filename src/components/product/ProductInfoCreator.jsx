import React from "react";
import classes from "./ProductInfoCreator.module.scss";
import User from "../user/User";

export default function ProductInfoCreator({
  name = "",
  avatar = "",
  verified = false,
}) {
  return (
    <div className={classes["product-info-creator"]}>
      <h1 className={classes.title}>Creator</h1>
      <div className={classes["user-container"]}>
        <User name={name} verified={verified} avatar={avatar} />
      </div>
    </div>
  );
}
