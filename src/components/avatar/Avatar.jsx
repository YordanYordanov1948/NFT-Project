import React from "react";

function Avatar({ url, verified, size }) {
  return (
    <div className="avatar" style={{ width: 90 || size, height: 90 || size }}>
      {" "}
      <img className="image" src="images/avatar.png" />
      {verified || verified === false}
      <img className="badge" src="images/verified.svg" />
    </div>
  );
}

export default Avatar;
