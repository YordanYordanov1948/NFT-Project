import React, { useEffect, useState } from "react";
import Header from "../../src/components/header/Header";
import ExploreTitle from "../../src/components/explore/ExploreTitle";
import ExploreFilters from "../../src/components/explore/ExploreFilters";
import Footer from "../../src/components/footer/Footer";
import { Container, Grid } from "@mui/material";
import Card from "../../src/components/card/Card";
import nfts from "../../data/nfts.json";

export default function Explore() {
  let url = process.env.apiUrl;

  const [nfts, setNfts] = useState();
  const [nftFilters, setNftFilters] = useState();

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/explore")
      .then((response) => response.json())
      .then((res) => res.nfts);
    setNfts(result);
  }, []);

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/explore")
      .then((response) => response.json())
      .then((res) => res.filters);
    setNftFilters(result);
  }, []);

  return (
    <div>
      <Container maxWidth="xl">
        <Header />
        <Grid container>
          <Grid item>
            <ExploreTitle />
            <ExploreFilters filters={nftFilters} nfts={nfts} />
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
