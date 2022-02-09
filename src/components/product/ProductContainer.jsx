import React from "react";
import classNames from "classnames";
import styles from "./ProductContainer.module.scss";
import Grid from "@mui/material/Grid";

export default function ProductContainer(
  name,
  owner,
  price,
  currency,
  likes,
  auction_end,
  details,
  bids,
  source
) {
  return (
    <div className={classNames(styles["product-container"])}>
      <Grid container>
        <Grid item xs={8} style="--aspect-ratio: 6/5;">
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </div>
  );
}
