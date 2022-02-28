import React from "react";
import styles from "./ActivityList.module.scss";
import classNames from "classnames";
import ActivityListItem from "./ActivityListItem";
import { Stack } from "@mui/material";

export default function ActivityList({ items }) {
  return (
    <div className={classNames(styles["activity-list"])}>
      <Stack direction="column" spacing={2}>
        {items.map((item, index) => (
          <ActivityListItem
            key={index}
            user={item.user}
            created_at={item.created_at}
            nft={item.nft}
            type={item.type}
          />
        ))}
      </Stack>
    </div>
  );
}
