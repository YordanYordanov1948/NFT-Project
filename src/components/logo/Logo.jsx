import React from "react";

function Logo({ type }) {
  return (
    <div>
      <img src="images/logo.svg" />
      {(type = "muted" && <img src="images/logo-muted.svg" />)}
    </div>
  );
}

export default Logo;
