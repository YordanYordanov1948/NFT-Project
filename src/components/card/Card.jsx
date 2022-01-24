import React from "react";
import Avatar from "../avatar/Avatar";
import Card from "@mui/material/Card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import millify from "millify";
import classNames from "classnames";
import styles from "./Card.module.scss";
import Countdown from "react-countdown";
import LiveTvIcon from "@mui/icons-material/LiveTv";

export default function CardComponent({
  name,
  timeLeft,
  title,
  likes = 0,
  mediaUrl,
  price,
  currency,
}) {
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    );
  };
  return (
    <div>
      <Card className={classNames(styles.card)}>
        {currency}
        <div className="media">
          {mediaUrl}
          <Avatar />
          <img
            src="./images/nft.jpg/"
            className={classNames(styles.media)}
          ></img>
          {timeLeft && (
            <Countdown date={Date.now() + 5000} renderer={renderer}>
              <LiveTvIcon />
              <div className="badge">
                <img
                  src="./images/nft.jpg/"
                  className={classNames(styles.media)}
                ></img>{" "}
              </div>
            </Countdown>
          )}
          <div className="likes">
            <IconButton aria-label="add to favorites">
              {millify(likes)}
              <FavoriteIcon />
            </IconButton>
          </div>
        </div>
        <div className={classNames(styles.title)}>{title}</div>{" "}
        <div className={classNames(styles.price)}>
          {" "}
          ~ {price} {currency}
        </div>
      </Card>
    </div>
  );
}
