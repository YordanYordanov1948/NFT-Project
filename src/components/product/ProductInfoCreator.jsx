import React from "react";
import styles from "./ProductInfoCreator.module.scss";
import classNames from "classnames";
import User from "../user/User";

export default function ProductInfoCreator({
  name = "",
  avatar = "",
  verified = false,
}) {
  return (
    <div className={classNames["product-info-creator"]}>
      <h1 className={classNames.title}>Creator</h1>
      <div className={classNames["user-container"]}>
        <User name={name} verified={verified} avatar={avatar} />
      </div>
    </div>
  );
}
