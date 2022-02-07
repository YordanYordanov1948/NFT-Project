import React from "react";

export default function ProductImage({ url }) {
  return (
    <div>
      <img className="image">{url}</img>
    </div>
  );
}
