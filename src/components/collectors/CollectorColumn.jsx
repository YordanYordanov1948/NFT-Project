import React from "react";
import Collector from "./Collector";
import classNames from "classnames";
import styles from "./CollectorColumn.module.scss";

export default function CollectorColumn({ items = [] }) {
  <div className={classNames(styles.container)}>
    {items.map((item, i) => (
      <Collector
        key={i}
        item={item}
        index={i + 1}
        type={i % 2 !== 0 ? classNames(styles.light) : classNames(styles.dark)}
      ></Collector>
    ))}
  </div>;
}
