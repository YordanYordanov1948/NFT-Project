import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import CardComponent from "../card/Card";

export default function Trending({ cards = "Trending" }) {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
      >
        {" "}
        <Typography variant="h1" component="div" gutterBottom>
          {cards}{" "}
        </Typography>
        <Select sx={{ m: 1, width: 300 }}>
          <MenuItem> {cards}</MenuItem>
        </Select>{" "}
      </Grid>
      <Grid container spacing={4}>
        <CardComponent title={"Clock"} />
        <CardComponent title={"DOGE"} />
        <CardComponent title={"BTC"} />
        <CardComponent title={"Litecoin"} />
      </Grid>
    </Container>
  );
}
