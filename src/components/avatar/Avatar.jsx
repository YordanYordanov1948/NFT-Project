import React from "react";
import { Badge } from "@mui/material";
function Avatar({ size, url, verified }) {
  return (
    <div className="avatar">
      <img className="image" src="images/avatar.png" alt="avatar" />
      <Badge>
        {verified === false}
        <img className="badge" src="images/verified.svg" />
      </Badge>
    </div>
  );
}

export default Avatar;
