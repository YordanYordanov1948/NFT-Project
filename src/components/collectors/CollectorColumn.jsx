import React from "react";
import Collector from "./Collector";

export default function CollectorColumn({ items = [] }) {
  return (
    <div>
      {items.map((item, i) => {
        return (
          <Collector
            key={item.id}
            {...item}
            type={i % 2 !== 0 ? "light" : ""}
          ></Collector>
        );
      })}
    </div>
  );
}
