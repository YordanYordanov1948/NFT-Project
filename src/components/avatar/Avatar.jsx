import React from "react";

export default function Avatar({ url, verifield, size = 90 }) {
  return (
    <div>
      <div className="avatar">
        <img className="image" src="images/avatar.png" />
      </div>
      <div>
        {verifield || verifield == false}
        <img className="badge " src="images/verified.svg" />
      </div>
    </div>
  );
}
