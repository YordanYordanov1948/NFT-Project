import React from "react";
import Collector from "./Collector";

export default function CollectorColumn({ items = [] }) {
  return (
    <div>
      {items.map((item, i) => (
        <Collector key={i} item={item}></Collector>
      ))}
    </div>
  );
}
