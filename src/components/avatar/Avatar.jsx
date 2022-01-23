import React from "react";

export default function Avatar({ url, verified = false, size = 90 }) {
  return (
    <div>
      {verified}
      <div
        className="avatar"
        style={{ width: size + "px", height: size + "px" }}
      >
        <img
          className="image"
          src="images/avatar.png"
          style={{ width: 100, height: 100 }}
        />
        <img className="badge " src="images/verified.svg" />
      </div>
    </div>
  );
}
