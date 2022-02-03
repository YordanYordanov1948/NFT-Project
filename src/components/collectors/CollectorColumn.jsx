import React from "react";
import Collector from "./Collector";

export default function CollectorColumn({ items = [] }) {
  return (
    <div className="container">
      {items.map((item, i) => (
        <Collector key={i} item={item} index={i + 1} type={type}></Collector>
      ))}
    </div>
  );
}
