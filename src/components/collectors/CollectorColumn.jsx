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
          type={i % 2 !== 0 ? "light" : ""}
        ></Collector>
      ))}
    </div>
  );
}
