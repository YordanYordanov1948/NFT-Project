import React from "react";
import Collector from "./Collector";

export default function CollectorColumn({
  items = [name, nftsCount, avatar, verified, boolean, id],
}) {
  return (
    <div>
      {items.map((item, i) => {
        <Collector
          type={"light"}
          key={i}
          item={item}
          index={i + 1}
        ></Collector>;
      })}
    </div>
  );
}
