import React from "react";
import Collector from "./Collector";
import styles from "./CollectorColumn.module.scss";

export default function CollectorColumn({ items = [] }) {
  return (
    <div className={styles.container}>
      {items.map((item, i) => (
        <Collector
          key={i}
          item={item}
          index={i + 1}
          type={i % 2 !== 0 ? styles.light : styles.dark}
        ></Collector>
      ))}
    </div>
  );
}
