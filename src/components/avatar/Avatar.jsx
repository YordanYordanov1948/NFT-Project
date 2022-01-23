import React from "react";

export default function Avatar({ url, verified = false, size = 90 }) {
  const divStyle = {
    width: { size },
    height: { size },
  };

  return (
    <div>
      {verified}
      <div className="avatar" style={{ divStyle }}>
        <img className="image" src="images/avatar.png" />
        <img className="badge " src="images/verified.svg" />
      </div>
    </div>
  );
}
