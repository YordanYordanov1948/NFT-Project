import React from "react";
import styles from "./ProductImage.module.scss";
import classNames from "classnames";

export default function ProductImage({ URL }) {
  return (
    <div className={classNames(styles["product-image"])}>
      <img className="image" src={URL}></img>
    </div>
  );
}
