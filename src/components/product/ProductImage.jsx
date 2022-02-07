import React from "react";
import styles from "./ProductImage.module.scss";
import classNames from "classnames";

export default function ProductImage({ url }) {
  return (
    <div className={classNames(styles[`product-image`])}>
      <img className={classNames(styles[`image`])}>{url}</img>
    </div>
  );
}
