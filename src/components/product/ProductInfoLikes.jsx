import React from "react";
import classes from "./ProductInfoLikes.module.scss";
import { Chip } from "@mui/material";
import millify from "millify";

export default function ProductInfoLikes({ amount = 0 }) {
  return (
    <div className={classes["product-info-likes"]}>
      <Chip
        label={millify(amount)}
        variant="outlined"
        className={classes.likes}
      />
    </div>
  );
}
