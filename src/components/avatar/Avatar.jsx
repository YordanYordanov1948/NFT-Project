import React from "react";

export default function Avatar({ url, verified = false, size = "90px" }) {
  return (
    <div>
      {verified}
      <div className="avatar" style={{ height: { size }, width: { size } }}>
        <img className="image" src="images/avatar.png" />
        <img className="badge " src="images/verified.svg" />
      </div>
    </div>
  );
}
