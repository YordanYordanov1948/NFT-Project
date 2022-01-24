import React from "react";
import Logo from "../logo/Logo";
import Button from "@mui/material/Button";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Search } from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Item className={classNames(styles.border)}>
              <Logo type={"muted"} />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              {" "}
              <Search />
              Find items , users and activities
            </Item>
          </Grid>
          <Grid item xs={4}>
            {" "}
            <Item className={classNames(styles.border)}>
              <Button variant="contained">Cookie Policy</Button>
              <Button variant="contained">Privacy Policy</Button>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
