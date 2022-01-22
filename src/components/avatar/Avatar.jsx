import React from "react";
import { Badge } from "@mui/material";

function Avatar({ url, verified = false, size }) {
  return (
    <div className="avatar" style={size}>
      <img className="image" src="images/avatar.png" />
      <Badge verified={verified}>
        <img className="badge" src="images/verified.svg" />
      </Badge>
    </div>
  );
}

export default Avatar;
