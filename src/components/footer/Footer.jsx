import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Logo from "../logo/Logo";
import { Search } from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

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
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button variant="outlined">Privacy Policy</Button>
          <Button variant="outlined">Cookie Policy</Button>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-end"
        >
          <Item>
            {" "}
            <Search />
            BOOM!
          </Item>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-end"
        >
          <Logo type={"muted"} />
        </Grid>
      </Container>
    </div>
  );
}
