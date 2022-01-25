import React from "react";
import Step from "./Step";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function How({ description, title, items = [], link }) {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      {" "}
      <Container>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="baseline"
        >
          <Grid xs={2}>
            <Item>{title}</Item>
          </Grid>
          <Grid xs={2}>
            <Item>
              {" "}
              <Step value={items} />
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item>{description}</Item>
          </Grid>
          <Grid xs={6}>
            <Button variant="contained" disableElevation href={link}>
              LEARN MORE
            </Button>{" "}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
