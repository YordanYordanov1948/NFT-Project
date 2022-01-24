import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

export default function Trending() {
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
          Trending
        </Typography>
        <Select sx={{ m: 1, width: 300 }}>
          <MenuItem>This Week</MenuItem>
        </Select>{" "}
      </Grid>
    </Container>
  );
}
