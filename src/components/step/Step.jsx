import React from "react";
import Container from "@mui/material/Container";
import styles from "./Step.module.scss";
import classNames from "classnames";
import Grid from "@mui/material/Grid";

export default function Step(number, title, description) {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Grid item xs>
            <h1>test</h1>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
