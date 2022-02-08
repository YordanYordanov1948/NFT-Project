import React from "react";
import styles from "./ProductInfoTimer.module.scss";
import classNames from "classnames";
import Countdown from "react-countdown";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
  return (
    <div className={classNames(styles["product-info-timer"])}>
      <h1 className={classNames(styles.title)}>Ends in</h1>
      <div className={classNames(styles.timer)}>
        <Countdown
          date={timeEnd}
          renderer={onTimeEnd}
          className={classNames(styles.active)}
        />
      </div>
      {timeEnd === null && <div></div>}
    </div>
  );
}
