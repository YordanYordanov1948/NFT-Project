import React from "react";
import Collector from "./Collector";
import classNames from "classnames";
import styles from "./Colector.module.scss";

export default function CollectorColumn({ items = [] }) {
  return (
    <div>
      {items.map((item, i) => (
        <Collector
          key={i}
          item={item}
          index={i + 1}
          type={i % 2 !== 0 ? classNames(styles.light) : "light"}
        ></Collector>
      ))}
    </div>
  );
}
