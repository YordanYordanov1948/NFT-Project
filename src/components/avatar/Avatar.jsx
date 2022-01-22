import React from "react";
import { Badge } from "@mui/material";
import { width } from "@mui/material/node_modules/@mui/system";
function Avatar({ size, url, verified }) {
  return (
    <div className="avatar" style={{ height: { size }, width: { size } }}>
      <img className="image" src="images/avatar.png" alt="avatar" />
      <Badge>
        <img className="badge" src="images/verified.svg" />
      </Badge>
    </div>
  );
}

export default Avatar;
