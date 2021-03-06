import React, { useState } from "react";
import styles from "./TopCollectors.module.scss";
import classNames from "classnames";
import {
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import CollectorColumn from "./CollectorColumn";
import array from "lodash/array";

export default function TopCollectors({ collectors }) {
  const [sort, setSort] = useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <Container maxWidth="xl">
      <Grid className={classNames(styles.header)} container>
        <Grid item xs={12} sm={12} md={8} lg={6}>
          <Typography variant="h1">Top Collectors</Typography>
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
            <Select displayEmpty onChange={handleChange} value={sort}>
              <MenuItem value={""}>Sort By</MenuItem>
              <MenuItem value={"This month"}>This month</MenuItem>
              <MenuItem value={"This year"}>This year</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container gap={2}>
        {array.chunk(collectors, 3).map((collector, index) => (
          <CollectorColumn key={index} items={collector} />
        ))}
      </Grid>
    </Container>
  );
}
