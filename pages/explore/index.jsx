import React from "react";
import Header from "../../src/components/header/Header";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import Footer from "../../src/components/footer/Footer";
import { Container, Grid } from "@mui/material";
import Card from "../../src/components/card/Card";
import nfts from "../../data/nfts.json";

export default function Explore() {
  return (
    <div>
      <Container maxWidth="xl">
        <Header />
        <Grid container>
          <Grid item>
            <ExploreTitle />
            <ExploreFilters />
          </Grid>
          <Grid item>
            <Card />
          </Grid>
        </Grid>
        <Footer />
      </Container>
    </div>
  );
}
