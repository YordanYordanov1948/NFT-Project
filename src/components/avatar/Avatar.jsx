import React from "react";
import { Badge } from "@mui/material";

function Avatar() {
  return (
    <div className="avatar">
      <Badge>
        <img className="badge" src="images/verified.svg" />
      </Badge>
    </div>
  );
}

export default Avatar;
