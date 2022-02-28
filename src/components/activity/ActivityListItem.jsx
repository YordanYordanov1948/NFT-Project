import React from "react";
import classNames from "classnames";
import styles from "./ActivityListItem.module.scss";
import Avatar from "../avatar/Avatar";
import Link from "../link/Link";
import { formatDistance, parseISO } from "date-fns";

export default function ActivityListItem({
  user,
  created_at,
  nft,
  type = "like",
}) {
  return (
    <div className={classNames(styles["activity-list-item"])}>
      <div className={classNames(styles.wrapper)}>
        <Avatar verified={user.verified} url={user.avatar.url}></Avatar>
        <div>{user.name}</div>
        {type == "like" ? <p>liked</p> : <p>bought</p>}
        <Link href="/">{nft.name} </Link>
        <span>by</span>
        <Link href="/"> {nft.owner.username}</Link>
      </div>
      <div>{formatDistance(parseISO(created_at), new Date())} ago</div>
    </div>
  );
}
