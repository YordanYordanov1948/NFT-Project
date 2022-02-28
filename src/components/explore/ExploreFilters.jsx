import React from "react";
import classNames from "classnames";
import styles from "./ExploreFilters.module.scss";
import {
  Stack,
  FormControl,
  Select,
  InputLabel,
  TextField,
  InputAdornment,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Search from "@mui/icons-material/Search";

export default function ExploreFilters({ filters }) {
  return (
    <div className={classNames(styles["explore-filters"])}>
      <Stack direction="row" spacing={2}>
        <FormControl className={classNames(styles.selectors)}>
          <InputLabel>Sort by</InputLabel>
          <Select label="Sort by" className={classNames(styles.select)}>
            <MenuItem>BOOOM</MenuItem>
          </Select>
          <InputLabel>Sort by</InputLabel>
          <Select label="Price Range" className={classNames(styles.select)}>
            <MenuItem>BOOOOM</MenuItem>
          </Select>
          <TextField
            className={classNames(styles["search-bar"])}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </FormControl>
      </Stack>
    </div>
  );
}
