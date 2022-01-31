import React from "react";
import Collector from "./Collector";
import styles from "./CollectorColumn.module";
import classNames from "classnames";

export default function CollectorColumn({ items = [] }) {
  return (
    <div>
      {items.map((item, i) => (
        <Collector
          key={i}
          item={item}
          index={i + 1}
          type={i % 2 !== 0 ? classNames(styles.light) : ""}
        ></Collector>
      ))}
    </div>
  );
}
