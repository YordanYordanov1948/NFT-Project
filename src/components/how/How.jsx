import React from "react";
import Step from "./Step";
import Container from "@mui/material/Container";
import styles from "./Step.module.scss";
import classNames from "classnames";
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
    <div className={classNames(styles.wrapper)}>
      {" "}
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Step />
        <Step />
        <Step />
        <Step />
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="baseline"
        >
          <Grid item xs={2} padding={"20px"}>
            <Item>{title}</Item>
          </Grid>
          <Grid item xs={2} padding={"20px"}>
            <Item>{items}</Item>
          </Grid>
          <Grid item xs={6} padding={"20px"}>
            <Item>{description}</Item>
          </Grid>
          <Button variant="contained" disableElevation href={link}>
            LEARN MORE
          </Button>{" "}
        </Grid>
      </Container>
    </div>
  );
}
