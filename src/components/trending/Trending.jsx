import React, { useState } from "react";
import styles from "./Trending.module.scss";
import {
  MenuItem,
  Typography,
  Grid,
  FormControl,
  Select,
  Container,
} from "@mui/material";
import classNames from "classnames";
import Card from "../card/Card";
import InputLabel from "@mui/material/InputLabel";

export default function Trending({ cards = [] }) {
  const [week, setWeek] = useState("");

  const handleChange = (event) => {
    setWeek(event.target.value);
  };
  return (
    <Container maxWidth="xl">
      <Grid className={classNames(styles.header)} container>
        <Grid item xs={12} sm={12} md={8} lg={6}>
          <Typography variant="h1">Trending</Typography>
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
            <Select displayEmpty onChange={handleChange} value={week}>
              <MenuItem value={""}>This Week</MenuItem>
              <MenuItem value={"This month"}>This month</MenuItem>
              <MenuItem value={"This year"}>This year</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid key={index} item xs={12} md={3} lg={3}>
              <Card
                name={card.name}
                user={{
                  avatar: card.owner.avatar.url,
                  verified: card.owner.verified,
                }}
                mediaUrl={card.source.url}
                price={card.price}
                currency={card.currency}
                likes={card.likes}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}
