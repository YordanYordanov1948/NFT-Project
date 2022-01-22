import React from "react";

function Avatar({ url, verified, size }) {
  const mystyle = {
    width: { size },
    height: { size },
  };

  return (
    <div className="avatar" style={mystyle}>
      {<img className="image" src="images/avatar.png" />}
      <img className="badge" src="images/verified.svg" />
    </div>
  );
}

export default Avatar;
