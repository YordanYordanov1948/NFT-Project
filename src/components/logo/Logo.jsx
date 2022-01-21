import React from "react";

function Logo({ type }) {
  const isLogoMuted = type;
  if (isLogoMuted) {
    return <img src="images/logo-muted.svg" />;
  }
  return (
    <div>
      <img src="images/logo.svg" />
    </div>
  );
}

export default Logo;
