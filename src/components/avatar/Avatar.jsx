import React from "react";
import classNames from "classnames";
import styles from "./Avatar.module.scss";

function Avatar({ url, verified = false, size = 90 }) {
  return (
    <div>
      {verified}
      <div
        className="avatar"
        style={{ width: size + "px", height: size + "px" }}
      >
        <img className={classNames(styles.image)} src="images/avatar.png" />
        <img className="badge " src="images/verified.svg" />
      </div>
    </div>
  );
}

export default Avatar;
