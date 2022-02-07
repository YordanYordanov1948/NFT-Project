import React from "react";
import styles from "./ProductInfoPrice.module.scss";
import classNames from "classnames";

export default function ProductInfoPrice({ amount = 0 }) {
  return (
    <div className={classNames(styles["product-info-price"])}>{amount}</div>
  );
}
