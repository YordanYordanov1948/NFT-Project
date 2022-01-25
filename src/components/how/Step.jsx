import React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

export default function Step({ number, title, description }) {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Grid>
          <Grid xs={6}>
            <Item>{number}</Item>
          </Grid>
          <Grid xs={6}>
            <Item>{title}</Item>
          </Grid>
          <Grid xs={6}>
            <Item>{description}</Item>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
