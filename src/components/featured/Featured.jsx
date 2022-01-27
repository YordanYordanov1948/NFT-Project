import React from "react";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useRouter } from "next/router";

export default function Featured({
  items = [],
  item = [
    {
      image:
        "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500",
      title: "Breakfast",
      rows: 2,
      cols: 3,
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=500",
      title: "Burger",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500&h=500",
      title: "Camera",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=500&h=500",
      title: "Coffee",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=500&h=500",
      title: "Hats",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500",
      title: "Honey",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=500&h=500",
      title: "Basketball",
      href: "/about",
    },
  ],
}) {
  const router = useRouter();
  return (
    <div>
      <Container>
        {" "}
        <ImageList
          sx={{ width: 500, height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={190}
        >
          {items.map((item) => (
            <ImageListItem key={item.image}>
              <img src={item.image} alt={item.title} alt={item.title} />
            </ImageListItem>
          ))}
          {item.map((items) => (
            <ImageListItem key={items.image}>
              <img
                src={items.image}
                alt={items.title}
                cols={items.cols || 3}
                rows={items.rows || 2}
                onClick={() => router.push("/about")}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
}
