import React from "react";
import styles from "./Trending.module.scss";
import { MenuItem, Grid, Select, Container } from "@mui/material";
import classNames from "classnames";
import Card from "../card/Card";

export default function Trending({ cards = [], sort = [] }) {
  return (
    <div>
      <Container maxWidth="false" className={classNames(styles.wrapper)}>
        <div className={classNames(styles.trending)}>Trending</div>
        <Select
          className={classNames(styles.select)}
          label="label"
          displayEmpty="true"
        >
          {sort.map((arr, i) => (
            <MenuItem value={arr.value} label={arr.label}>
              {arr.label}
            </MenuItem>
          ))}
        </Select>
      </Container>
      <Grid container spacing={2} className={classNames(styles.container)}>
        {cards.map((card, i) => (
          <Grid item xs={3} key={i}>
            <Card
              name={card.name}
              like={card.likes}
              mediaUrl={card.mediaUrl}
              timeLeft={card.timeLeft}
              price={card.price}
              currency={card.currency}
              user={card.user}
            ></Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
