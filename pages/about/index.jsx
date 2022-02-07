import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";
import Header from "../../src/components/header/Header";
import Featured from "../../src/components/featured/Featured";
import Trending from "../../src/components/trending/Trending";
import TopCollectors from "../../src/components/collectors/TopCollectors";
import How from "../../src/components/how/How";
import Auctions from "../../src/components/auctions/Auctions";
import Footer from "../../src/components/footer/Footer";

export default function About() {
  return (
    <Container>
      <Header></Header>
      <Featured></Featured>
      <Trending></Trending>
      <TopCollectors />
      <How />
      <Auctions />
      <Footer />
    </Container>
  );
}
