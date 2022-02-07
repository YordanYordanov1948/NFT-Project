import React from "react";

export default function ProductImage({ url }) {
  return (
    <div>
      <image className="image">{url}</image>
    </div>
  );
}
