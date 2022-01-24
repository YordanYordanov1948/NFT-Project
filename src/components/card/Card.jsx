import React from "react";
import Avatar from "../avatar/Avatar";
import Card from "@mui/material/Card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import millify from "millify";
import classNames from "classnames";
import styles from "./Card.module.scss";

export default function CardComponent({
  title,
  likes = 0,
  mediaUrl,
  price,
  currency,
}) {
  return (
    <Card className={classNames(styles.card)}>
      {currency}
      <div className="media">
        {mediaUrl}
        <Avatar />
        <img src="./images/nft.jpg/" className={classNames(styles.media)}></img>
        <div className="likes">
          <IconButton aria-label="add to favorites">
            {millify(likes)}
            <FavoriteIcon />
          </IconButton>
          <div className={classNames(styles.price)}>
            {" "}
            ~ {price} {currency}
          </div>
        </div>
      </div>
      <div className={classNames(styles.title)}>{title}</div>
    </Card>
  );
}
