import React from "react";
import styles from "./Avatar.module.scss";
<<<<<<< HEAD

=======
>>>>>>> master
import classNames from "classnames";

function Avatar({ url, verified, size }) {
  return (
    <div className="avatar" style={size}>
<<<<<<< HEAD
      <img className="image" src="images/avatar.png" />
=======
      <img className={classNames(styles.image)} src="images/avatar.png" />
>>>>>>> master
      <img className="badge" src="images/verified.svg" />
    </div>
  );
}

export default Avatar;
