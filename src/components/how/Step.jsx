import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import classNames from "classnames";
import styles from "./Step.module.scss";

export default function Step({ number, title, description }) {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Grid container>
      <Grid item className={classNames(styles.bg)}>
        <Item>{number}</Item>
      </Grid>
      <Grid>
        <Item>{title}</Item>
      </Grid>
      <Grid>
        <Item>{description}</Item>
      </Grid>
    </Grid>
  );
}
