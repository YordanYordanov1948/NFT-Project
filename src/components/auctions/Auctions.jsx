import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import CardComponent from "../card/Card";
import classNames from "classnames";
import styles from "./Auctions.module.scss";
import LiveTvIcon from "@mui/icons-material/LiveTv";

export default function Auctions({ cards = [] }) {
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  };
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Box>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
          >
            <Typography
              variant="h1"
              component="div"
              gutterBottom
              className={classNames(styles.typography)}
            >
              Live Auctions
            </Typography>
            <Select
              sx={{ m: 1, width: 300 }}
              className={classNames(styles.select)}
            >
              <MenuItem>{cards}</MenuItem>
            </Select>
          </Grid>
          <Grid container spacing={4}>
            <CardComponent title={"Clock"} />
            <CardComponent title={"DOGE"} />
            <CardComponent title={"BTC"} />
            <CardComponent title={"Litecoin"} />
          </Grid>
        </Box>
      </Container>
    </div>
  );
}