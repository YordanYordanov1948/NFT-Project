import React from "react";
import styles from "./ProductInfo.module.scss";
import classNames from "classnames";
import Stack from "@mui/material/Stack";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoTimer from "./ProductInfoTimer";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoTitle from "./ProductInfoTitle";
import Grid from "@mui/material/Grid";

export default function ProductInfo({
  title,
  creator,
  price,
  currency,
  likes,
  onTimeEnd,
  timeEnd,
  isLive,
}) {
  return (
    <div className={classNames(styles["product-info"])}>
      <ProductInfoTitle text={title} />
      <Grid container>
        <Grid item xs={5}>
          <ProductInfoCreator
            name="test"
            verified={true}
            style="--aspect-ratio: 6/5;"
          />
        </Grid>
        <Grid item xs={7}>
          <ProductInfoTimer
            timeEnd={timeEnd}
            onTimeEnd={onTimeEnd}
            style="--aspect-ratio: 7/5;"
          />
        </Grid>
      </Grid>
      <Stack spacing={2} className={classNames(styles.stats)}>
        <ProductInfoPrice currency="ETH" />
        <ProductInfoLikes />
      </Stack>
      {isLive && <ProductInfoStatus />}
    </div>
  );
}
