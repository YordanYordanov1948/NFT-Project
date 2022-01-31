import React from "react";
import Collector from "./Collector";
import classNames from "classnames";
import styles from "./CollectorColumn.module.scss";

export default function CollectorColumn({ items = [] }) {
  return (
    <div className={classNames(styles.container)}>
      {items.map((item, i) => (
        <Collector
          key={item.id}
          {...item}
          type={i % 2 !== 0 ? "light" : ""}
        ></Collector>
      ))}
    </div>
  );
}
