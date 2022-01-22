import React from "react";

function Avatar({ size, url, verified }) {
  return (
    <div className="avatar">
      <img className="image" src="images/avatar.png">
        {size}
        {url}
      </img>
      <div className="badge ">{verified}</div>
    </div>
  );
}

export default Avatar;
