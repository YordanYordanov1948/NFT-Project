import React from "react";
import _ from "lodash";

export default function TopCollectors({ items }) {
  const collectors = _.chunk(items, 3);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
