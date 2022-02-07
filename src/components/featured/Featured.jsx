import React from "react";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useRouter } from "next/router";

export default function Featured({ items = [] }) {
  const router = useRouter();

  return (
    <div>
      <Container>
        {" "}
        <ImageList
          sx={{ width: 500, height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {items.map((item) => (
            <ImageListItem
              key={item.image}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                src={item.image}
                alt={item.title}
                alt={item.title}
                onClick={() => router.push("/about")}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
}
