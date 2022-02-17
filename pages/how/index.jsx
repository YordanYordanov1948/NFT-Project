import React from "react";
import Description from "../../src/components/description/Description";
import Footer from "../../src/components/footer/Footer";
import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero";

export default function How(props) {
  return (
    <div>
      <Header />
      <Hero text={props.text} />
      <Description text={props.text} image={props.image} />
      <Footer />
    </div>
  );
}
