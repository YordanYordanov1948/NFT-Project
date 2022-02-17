import React from "react";
import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero";
import Description from "../../src/components/description/Description";
import Footer from "../../src/components/footer/Footer";

export default function index({ text, image }) {
  return (
    <div>
      <Header />
      <Hero text={text} />
      <Description text={text} image={image} />
      <Footer />
    </div>
  );
}
