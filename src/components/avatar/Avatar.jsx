import React from "react";

function Avatar({ size, url, verified }) {
  return (
    <div className="avatar">
      {(url = <img className="image" src="images/avatar.png" alt="avatar" />)}
      <div className="badge">
        {verified == "false"}
        <img src="images/verified.svg" />
      </div>
    </div>
  );
}

export default Avatar;
