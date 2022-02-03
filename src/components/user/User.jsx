import React from "react";
import Avatar from "../avatar/Avatar";
import classNames from "classnames";
import styles from "./User.module.scss";

export default function User({
  name = "BOOM",
  info = 134,
  avatar = "",
  size = 55,
  verified = false,
}) {
  return (
    <div className={classNames(styles.user)}>
      {avatar}
      {verified}
      <Avatar />
      <div className={classNames(styles.name)}>{name}</div>
      <div className={classNames(styles.info)}>{info}</div>
    </div>
  );
}
