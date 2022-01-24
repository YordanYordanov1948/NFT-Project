import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

export default function Trending({ cards, title = "Trending" }) {
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
          {title}
        </Typography>
        <Select sx={{ m: 1, width: 300 }}>
          <MenuItem>{title}</MenuItem>
        </Select>{" "}
      </Grid>
    </Container>
  );
}
