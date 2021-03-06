import React, { useState } from "react";
import styles from "./Auctions.module.scss";
import {
  MenuItem,
  Typography,
  Grid,
  FormControl,
  Select,
  Container,
} from "@mui/material";
import classNames from "classnames";
import CardComponent from "../card/Card";

export default function Auctions({ cards = [] }) {
  const [price, setPrice] = useState("");

  const handleChange = (event) => {
    setPrice(event.target.value);
  };
  return (
    <Container maxWidth="xl">
      <Grid className={classNames(styles.header)} container>
        <Grid item xs={12} sm={12} md={8} lg={6}>
          <Typography variant="h1">&#128293; Live Auctions</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={6}
          style={{ justifyContent: "flex-end", display: "flex" }}
        >
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <Select displayEmpty onChange={handleChange} value={price}>
              <MenuItem value={""}>Price range</MenuItem>
              <MenuItem value={"This month"}>This month</MenuItem>
              <MenuItem value={"This year"}>This year</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Container maxWidth="xl" className={classNames(styles.container)}>
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid key={index} item xs={12} md={3} lg={3}>
              <CardComponent
                name={card.name}
                user={{
                  avatar: card.owner.avatar.url,
                  verified: card.owner.verified,
                }}
                mediaUrl={card.source.url}
                price={card.price}
                currency={card.currency}
                timeLeft={card.auction_end}
                likes={card.likes}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}
