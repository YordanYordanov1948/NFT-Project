import classNames from "classnames";
import React from "react";
import styles from "./ProductTabs.module.scss";
import TabContext from "@mui/lab/TabContext";
import User from "../user/User";

export default function ProductTabs({ text, bids }) {
  return (
    <div className={classNames(styles["product-tabs"])}>
      <TabContext>
        <User />
      </TabContext>
    </div>
  );
}
