import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Step from "./Step";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function How({ title, description, items = [], link }) {
  const items = items;
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>{description}</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>{title}</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              {numbers.map((items) => (
                <Step value={items} />
              ))}
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Button variant="contained" href={link}>
        Link
      </Button>
    </div>
  );
}
