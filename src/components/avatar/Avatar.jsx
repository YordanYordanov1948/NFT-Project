import React from "react";

function Avatar({ url, size = 90, verified = false }) {
  return (
    <div className="avatar" style={{ height: { size }, width: { size } }}>
      <img className="image" src="images/avatar.png" />
      <img className="badge" src="images/verified.svg" />
      {verified}
    </div>
  );
}

export default Avatar;
