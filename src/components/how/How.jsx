import React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import styles from "./How.module.scss";

export default function How({ title, description, items = [], link }) {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Container>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid>
            <Item>{title}</Item>
          </Grid>
          <Grid>
            <Item>{description}</Item>
          </Grid>
          <Grid>{items}</Grid>
        </Grid>
        <Button variant="contained" href={link}>
          Link
        </Button>
      </Container>
    </div>
  );
}
