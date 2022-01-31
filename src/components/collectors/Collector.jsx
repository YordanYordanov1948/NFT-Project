import React from "react";
import User from "../user/User";
import classNames from "classnames";
import styles from "./Collector.module.scss";

export default function Collector({ name, avatar, verified, nftsCount, type }) {
  return (
    <div className={classNames(styles.container)}>
      <User
        name={name}
        avatar={avatar}
        verified={verified}
        info={nftsCount}
        type={type}
      />
    </div>
  );
}
