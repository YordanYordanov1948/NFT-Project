import React from "react";
import Collector from "./Collector";

export default function CollectorColumn({
  items = [name, nftsCount, avatar, verified, boolean, id],
}) {
  return (
    <div>
      <Collector type={type}></Collector>
    </div>
  );
}
