import React from "react";
import Collector from "./Collector";
import classNames from "classnames";
import styles from "./Collector.module.scss";

export default function CollectorColumn({ items = [] }) {
  return (
    <div className="container">
      {items.map((item, i) => (
        <Collector
          key={item}
          index={i + 1}
          type={
            i % 2 !== 0 ? classNames(styles.light) : classNames(styles.dark)
          }
        ></Collector>
      ))}
    </div>
  );
}
