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
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Logo type={"muted"} />
          <Grid item xs={4}>
            <Item>
              {" "}
              <Search />
              BOOM{" "}
            </Item>
          </Grid>
          <Button variant="contained">Cookie Policy</Button>
          <Button variant="contained">Privacy Policy</Button>
        </Grid>
      </Container>
    </div>
  );
}
