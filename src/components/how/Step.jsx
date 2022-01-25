import React from "react";
import classNames from "classnames";
import styles from "./Step.module.scss";

export default function Step({ number, title, description }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item classNames={classNames(styles.numbers)}>{number}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>{title}</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>{description}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
