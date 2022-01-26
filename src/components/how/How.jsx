import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Step from "./Step";

export default function How({ description, title, items = [], link }) {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid container>
      <Grid item>
        <Item>{title}</Item>
      </Grid>
      <Grid item>
        <Item>{description}</Item>
      </Grid>
      <Grid item>
        <Item>
          {items.map((item, i) => {
            return <Step key={i} number={i + 1} {...item} />;
          })}
        </Item>
      </Grid>

      <Button variant="contained" href={link}>
        Link
      </Button>
    </Grid>
  );
}
