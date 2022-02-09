import React from "react";
import classNames from "classnames";
import styles from "./ProductContainer.module.scss";

export default function ProductContainer() {
  return <div className={classNames(styles["product-container"])}></div>;
}
