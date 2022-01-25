import React from "react";
import Container from "@mui/material/Container";
import styles from "./Step.module.scss";
import classNames from "classnames";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 2 }} gutterBottom>
                {title}
              </Typography>
              <Typography
                sx={{ mb: 1.5 }}
                className={classNames(styles.number)}
              >
                {number}
              </Typography>
              <Typography variant="body2">{description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </div>
  );
}
