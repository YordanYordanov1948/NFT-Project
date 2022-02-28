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

export default function Trending({ cards = [], sort = [] }) {
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
        </Grid>
      </Grid>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {cards.map((card, index) => {
            return (
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
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
}
