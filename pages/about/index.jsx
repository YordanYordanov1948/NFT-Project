import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";
import Header from "../../src/components/header/Header";
import Featured from "../../src/components/featured/Featured";
import Trending from "../../src/components/trending/Trending";

export default function About() {
  return (
    <Container>
      <Header />
      <Featured />
      <Trending />
    </Container>
  );
}
