import React from "react";
import styles from "./ProductInfoCreator.module.scss";
import classNames from "classnames";
import User from "../user/User";

export default function ProductInfoCreator({ name, avatar, verified = false }) {
  return (
    <div className={classNames(styles["product-info-creator"])}>
      <p className={classNames(styles.title)}>Creator</p>
      <div className={classNames(styles["user-container"])}>
        <User name={name} avatar={avatar} verified={verified} />
      </div>
    </div>
  );
}
