import { Button, Grid } from "@mui/material";
import styles from "./ProductActions.module.scss";
import classNames from "classnames";

export default function ProductActions({
  isLive,
  currency,
  buyAmount,
  bidAmount,
  onBuy,
  onBid,
}) {
  return (
    <div className={classNames(styles["product-actions"])}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Button
            className={classNames(styles.button)}
            disable={isLive}
            enable={isLive}
            onClick={onBuy}
            variant="contained"
          >
            BUY FOR {buyAmount + " " + currency}
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Button
            className={classNames(styles.button)}
            disable={!isLive}
            enable={!isLive}
            onClick={onBid}
            color="success"
            variant="outlined"
          >
            PLACE BID FOR {bidAmount + " " + currency}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
