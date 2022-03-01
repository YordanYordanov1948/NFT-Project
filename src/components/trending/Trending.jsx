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
          <Grid item xs={3}>
            <Card
              name="Bored Ape"
              likes="500"
              mediaUrl="https://ichef.bbci.co.uk/news/640/cpsprodpb/DBB7/production/_122074265_hi071843849.jpg"
              price="~8.2"
              currency="SOL"
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              name="Bored Ape"
              likes="500"
              mediaUrl="https://ichef.bbci.co.uk/news/640/cpsprodpb/DBB7/production/_122074265_hi071843849.jpg"
              price="~8.2"
              currency="SOL"
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              name="Bored Ape"
              likes="500"
              mediaUrl="https://ichef.bbci.co.uk/news/640/cpsprodpb/DBB7/production/_122074265_hi071843849.jpg"
              price="~8.2"
              currency="SOL"
            />
          </Grid>
          <Grid item xs={3}>
            <Card
              name="Bored Ape"
              likes="500"
              mediaUrl="https://ichef.bbci.co.uk/news/640/cpsprodpb/DBB7/production/_122074265_hi071843849.jpg"
              price="~8.2"
              currency="SOL"
            />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
