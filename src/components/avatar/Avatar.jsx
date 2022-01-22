import React from "react";

export default function Avatar({ url, verifield = false, size = 90 }) {
  return (
    <div>
      <div className="avatar">
        <img className="image" src="images/avatar.png" />
      </div>
      <div>
        {verifield}
        <img className="badge " src="images/verified.svg" />
      </div>
    </div>
  );
}
