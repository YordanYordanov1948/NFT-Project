import React from "react";
import styles from "./ProfileCollection.module.scss";
import classNames from "classnames";
import { Container, Grid, Typography } from "@mui/material";
import ProfileCollectionFilters from "./ProfileCollectionFilters";
import User from "../user/User";
import Card from "../card/Card";

export default function ProfileCollection({
  user = { name: "J", info: "someInfo" },
  filters = "name",
  items = [
    {
      name: "String",
      likes: 0,
      user: "Jonny",
      mediaUrl: "images/nft.jpg",
      timeLeft: 100000000,
      price: "~12.2",
      currency: "BTC",
    },

    {
      name: "String",
      likes: 0,
      user: "Jonny",
      mediaUrl: "images/nft.jpg",
      timeLeft: 100000000,
      price: "~12.2",
      currency: "BTC",
    },
  ],
}) {
  return (
    <div className={classNames(styles["profile-collection"])}>
      <User name={user.name} info={user.info} />
      <Container>
        <Grid container>
          <Grid item xs={3}>
            <Typography variant="h3">Collections</Typography>
          </Grid>
          <Grid item xs={9}>
            <ProfileCollectionFilters
              filters={filters}
            ></ProfileCollectionFilters>
          </Grid>
        </Grid>
        <Grid container>
          {items.map((card, index) => {
            return (
              <Grid item xs={3}>
                <Card
                  key={index}
                  name={card.name}
                  likes={card.likes}
                  mediaUrl={card.source?.url}
                  user={user}
                  price={card.price}
                  currency={card.currency}
                  timeLeft={card.auction_end}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
