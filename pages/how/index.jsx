import React from "react";
import Header from "../../src/components/header/Header";
import { Container } from "@mui/material";
import Hero from "../../src/components/hero/Hero";
import Description from "../../src/components/description/Description";
import Footer from "../../src/components/footer/Footer";

export default function How() {
  return (
    <div>
      <Header />
      <Hero text="How it works" />
      <Description
        text="Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue."
      />
      <Footer />
    </div>
  );
}
