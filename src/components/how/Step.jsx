import React from "react";
import Container from "@mui/material/Container";
import styles from "./Step.module.scss";
import classNames from "classnames";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Step({ number, title, description }) {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="flex-end"
        >
          <Paper sx={{ p: 2, maxWidth: 500, flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {number}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    {description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}
