import React from "react";

export default function Avatar({ url, verified = false, size }) {
  return (
    <div>
      {verified}
      <div className="avatar">
        <img className="image" src="images/avatar.png" />
        <img className="badge " src="images/verified.svg" />
      </div>
    </div>
  );
}
