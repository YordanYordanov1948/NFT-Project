import React from "react";

function Avatar({ size, url, verified }) {
  const styled = {
    height: 90,
    weight: 90,
  };
  return (
    <div className="avatar" style={styled || { size }}>
      <img
        className="image"
        src="images/avatar.png"
        style={styled || { size }}
      />
      <img className="badge" src="images/verified.svg" />
    </div>
  );
}

export default Avatar;
