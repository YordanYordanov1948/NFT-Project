import React from "react";
import Avatar from "../avatar/Avatar";
import classNames from "classnames";
import styles from "./User.module.scss";
function User({
  name = "",
  info = "",
  avatar = "",
  size = 55,
  verified = false,
}) {
  return (
    <div className="user">
      <div className={classNames(styles.name)}>{name}</div>
      <div className={classNames(styles.info)}>{info}</div>
      <Avatar />
    </div>
  );
}

export default User;
