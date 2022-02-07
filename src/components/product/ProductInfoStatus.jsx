import React from "react";
import classNames from "classnames";
import styles from "./ProductInfoStatus.module.scss";
import Chip from "@mui/material/Chip";

export default function ProductInfoStatus() {
  return (
    <div>
      <Chip
        className={classNames(styles.status)}
        label="Chip Outlined"
        variant="outlined"
      />
    </div>
  );
}
