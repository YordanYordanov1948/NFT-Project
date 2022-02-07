import React from "react";
import classNames from "classnames";
import styles from "./ProductInfoStatus.module.scss";

export default function ProductInfoStatus() {
  return (
    <div className={classNames(styles["product-info-status"])}>
      <div className={classNames(styles.status)}></div>
    </div>
  );
}