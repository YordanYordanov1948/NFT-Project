import React from "react";

export default function ProductImage({ url }) {
  return (
    <div className="product-image">
      <img className="image">{url}</img>
    </div>
  );
}
