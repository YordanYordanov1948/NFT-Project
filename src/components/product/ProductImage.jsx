import React from "react";
import styles from "./ProductImage.module.scss";
import classNames from "classnames";

export default function ProductImage({ url }) {
  return (
    <div className={classNames(styles["product-image"])}>
      <h1>hello</h1>
    </div>
  );
}
