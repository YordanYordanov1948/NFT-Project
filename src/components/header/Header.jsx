import React from "react";
import Logo from "../logo/Logo";
import Button from "@mui/material/Button";
import styles from "./Header.module.scss";
import classNames from "classnames";
import Container from "@mui/material/Container";

function Header() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Logo />
        <Button variant="contained">Explore</Button>
      </Container>
    </div>
  );
}

export default Header;
