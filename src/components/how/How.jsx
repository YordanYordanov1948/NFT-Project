import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function How({ description, title, items = [], link }) {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item>{description}</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>{title}</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>{items}</Item>
      </Grid>

      <Button variant="contained" href={link}>
        Link
      </Button>
    </Grid>
  );
}
