import classNames from "classnames";
import React from "react";
import User from "../user/User";
import styles from "./Example.module.scss";
import classNames from "classnames";

export default function Collector({ name, avatar, verified, type, nftsCount }) {
  return (
    <div className="container">
      <User
        name={name}
        avatar={avatar}
        verified={verified}
        type={type ? classNames(styles.light) : ""}
        nftsCount={nftsCount}
      />
    </div>
  );
}
