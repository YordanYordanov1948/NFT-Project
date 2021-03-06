import React, { useState } from "react";
import styles from "./Card.module.scss";
import millify from "millify";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";
import Countdown from "react-countdown";
import LiveIcon from "@mui/icons-material/FiberManualRecord";

import {
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

import { Card as MuiCard } from "@mui/material";

export default function Card({
  name,
  likes = 0,
  mediaUrl,
  user,
  price,
  currency,
  timeLeft,
}) {
  const [likesNumber, setLikesNumber] = useState(likes);

  return (
    <MuiCard
      sx={{ maxWidth: 345, minHeight: 420 }}
      className={classNames(styles.backgroundTimeLeft)}
      style={{ padding: "0 10px" }}
    >
      <div className={classNames(styles.liveContainer)}>
        {timeLeft && (
          <div className={classNames(styles.badge)}>
            <LiveIcon fontSize="small" />
            <Typography paragraph>LIVE</Typography>
          </div>
        )}
        <CardMedia
          className={classNames(styles.media)}
          component="img"
          image={mediaUrl}
          alt={mediaUrl}
        />
        {timeLeft && (
          <div className={classNames(styles.countdownContainer)}>
            <Countdown date={timeLeft} />
          </div>
        )}
      </div>
      <CardContent className={classNames(styles.titleContainer)}>
        <div>
          <Typography className={classNames(styles.title)}>{name}</Typography>
          <Typography className={classNames(styles.price)}>
            {price} {currency}
          </Typography>
        </div>
        <Chip
          onClick={() => setLikesNumber(likesNumber + 1)}
          label={millify(likesNumber)}
          variant="outlined"
          className={classNames(styles.likes)}
        />
      </CardContent>
    </MuiCard>
  );
}
