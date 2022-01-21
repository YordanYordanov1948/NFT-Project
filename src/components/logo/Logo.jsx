import React from "react";

function Logo({ type }) {
  const muted = type;
  return (
    <div>
      <img src="images/logo.svg" />
      {muted && <img src="images/logo-muted.svg" />}
    </div>
  );
}

export default Logo;
