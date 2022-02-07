import React from "react";
import styles from "./ProductInfoPrice.module.scss";
import classNames from "classnames";
import Chip from "@mui/material/Chip";

export default function ProductInfoStatus() {
  return (
    <div className={classNames(styles["product-info-status"])}>
      <Chip
        className={classNames(styles.status)}
        label="Chip Outlined"
        variant="outlined"
      />
    </div>
  );
}
