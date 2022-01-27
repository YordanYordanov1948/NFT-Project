import React from "react";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Featured({
  items = [
    {
      image:
        "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500",
      title: "Breakfast",
      rows: 2,
      cols: 3,
      href: "/about",
    },
  ],
}) {
  return (
    <div>
      <Container>
        {" "}
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
          {items.map((item) => (
            <ImageListItem key={item.image}>
              <img src={item.image} alt={item.title} alt={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
}
