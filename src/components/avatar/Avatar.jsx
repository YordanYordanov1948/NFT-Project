import React from "react";

export default function Avatar({ url, verified = false, size = 90 }) {
  const style = {
    height: { size },
    width: { size },
  };
  return (
    <div>
      {verified}
      <div className="avatar" style={{ style }}>
        <img className="image" src="images/avatar.png" />
        <img className="badge " src="images/verified.svg" />
      </div>
    </div>
  );
}
