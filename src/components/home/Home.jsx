import React from "react";
import Header from "../header/Header";
import Featured from "../featured/Featured";
import Trending from "../trending/Trending";
import TopCollectors from "../collectors/TopCollectors";
import How from "../how/How";
import Auctions from "../auctions/Auctions";
import Footer from "../footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Featured />
      <Trending />
      <TopCollectors />
      <How />
      <Auctions />
      <Footer />
    </div>
  );
}
