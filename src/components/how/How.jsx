import React from "react";
import Step from "./Step";
import Container from "@mui/material/Container";
import styles from "./Step.module.scss";
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function How(description, title, items = [], link) {
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
          {" "}
          <Button variant="contained" disableElevation href={link}>
            Disable elevation
          </Button>
        </Grid>
      </Container>
    </div>
  );
}
