import React from "react";
import styles from "./Avatar.module.scss";

import classNames from "classnames";

function Avatar({ url, verified, size }) {
  return (
    <div className="avatar" style={size}>
      <img className="image" src="images/avatar.png" />
      <img className="badge" src="images/verified.svg" />
    </div>
  );
}

export default Avatar;
