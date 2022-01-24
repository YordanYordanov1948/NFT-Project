import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import CardComponent from "../card/Card";

export default function Trending({ title, cards = 0 }) {
  return (
    <Container fixed>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
      >
        {" "}
        <Typography variant="h1" component="div" gutterBottom>
          Trending{" "}
        </Typography>
        <Select sx={{ m: 1, width: 300 }}>
          <MenuItem>Trending</MenuItem>
        </Select>{" "}
      </Grid>
      <Grid container spacing={4}>
        <CardComponent name={(title = "Clock")} />
        <CardComponent name={(title = "DOGE")} />
        <CardComponent name={(title = "BTC")} />
        <CardComponent name={(title = "Litecoin")} />
      </Grid>
    </Container>
  );
}
