import React from "react";

function Logo({ type }) {
  return (
    <div>
      <img src="images/logo.svg" />
      {type && <img src="image/logo-muted.svg" />}
    </div>
  );
}

export default Logo;
