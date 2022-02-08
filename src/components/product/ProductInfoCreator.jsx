import React from "react";
import styles from "./ProductInfoCreator.module.scss";
import classNames from "classnames";
import User from "../user/User";
import Typography from "@mui/material/Typography";

export default function ProductInfoCreator({
  name = "",
  avatar = "",
  verified = false,
}) {
  return (
    <div className={classNames(styles["product-info-creator"])}>
      <Typography variant="h1" className={classNames(styles.title)}>
        Creator
      </Typography>
      <div className={classNames(styles["user-container"])}>
        <User name={name} verified={verified} avatar={avatar} />
      </div>
    </div>
  );
}
