import React from "react";
import Avatar from "../avatar/Avatar";
import CardMui from "@mui/material/Card";

export default function Card({ name, likes, mediaUrl, price, currency }) {
  return (
    <CardMui className="card">
      <Avatar />
      {currency}
      <div className="media">
        {mediaUrl}
        <img src="./images/nft.jpg/"></img>
      </div>
      <div className="title">{name}</div>
      <div className="price">{price}</div>
      <div className="likes">{likes}</div>
    </CardMui>
  );
}
