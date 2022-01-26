import React from "react";
import Logo from "../logo/Logo";
import Button from "@mui/material/Button";
import styles from "./Header.module.scss";
import classNames from "classnames";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Search } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Header() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="baseline"
        >
          <Logo />
          <Grid>
            <Item>
              <Search />
              Find items , users and activities
            </Item>
          </Grid>
          <Typography>Home</Typography>
          <Typography>Activity</Typography>
          <Button variant="contained">Explore</Button>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;
