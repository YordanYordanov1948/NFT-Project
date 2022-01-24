import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Logo from "../logo/Logo";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Grid
          container
          direction="row-reverse"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button variant="outlined">Privacy Policy</Button>
          <Button variant="outlined">Cookie Policy</Button>

          <Typography className={classNames(styles.center)}>BOOM</Typography>

          <Logo type={"muted"} />
        </Grid>
      </Container>
    </div>
  );
}
