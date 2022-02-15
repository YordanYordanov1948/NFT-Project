import React, { useState } from "react";
import styles from "./ProductTabs.module.scss";
import classNames from "classnames";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import User from "../user/User";
import { formatDistance, parseISO } from "date-fns";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

export default function ProductTabs({ text, bids }) {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classNames(styles["product-tabs"])}>
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab
            label="Details"
            value="1"
            className={classNames(styles["tab-details"])}
          />
          <Tab
            label="Bids"
            value="2"
            className={classNames(styles["tab-bids"])}
          />
        </TabList>
        <TabPanel value="1">{text}</TabPanel>
        <TabPanel value="2">
          <Table>
            <TableBody>
              <TableRow className={classNames(`table-row-}`)}>
                <TableCell component="th" scope="row">
                  <User />
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabPanel>
      </TabContext>
    </div>
  );
}
