import React from "react";

function Avatar({ verified }) {
  return (
    <div className="avatar">
      <img className="image" src="images/avatar.png" />
      {verified || <img className="badge" src="images/verified.svg" />}
    </div>
  );
}

export default Avatar;
