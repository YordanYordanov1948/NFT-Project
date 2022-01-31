import React from "react";
import Collector from "./Collector";
import classNames from "classnames";
import styles from "./CollectorColumn.module.scss";

export default function CollectorColumn({ items = [] }) {
  console.log(items);
  return (
    <div>
      {items.map((item, i) => {
        console.log(item);
        return (
          <Collector
            key={item.id}
            {...item}
            type={i % 2 == 0 ? "light " : ""}
          />
        );
      })}
    </div>
  );
}
