import React from "react";

export default function Logo({ type }) {
  if (type === "muted") {
    return (
      <img alt="logo" src="/images/logo-muted.svg" width="100" height="90" />
    );
  } else {
    return <img alt="logo" src="/images/logo.svg" width="100" height="90" />;
  }
}
