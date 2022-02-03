import React from "react";
import Collector from "./Collector";
import styles from "./Collector.module.scss";

export default function CollectorColumn({ items = [] }) {
  return (
    <div className="container">
      {items.map((item, i) => (
        <Collector
          key={i}
          item={item}
          index={i + 1}
          type={([styles.dark] === "dark", [styles.light] === "light")}
        ></Collector>
      ))}
    </div>
  );
}
