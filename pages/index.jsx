import React, { useState, Fragment, useEffect } from "react";
import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import TopCollectors from "../src/components/collectors/TopCollectors";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";
import dataFeatured from "../data/featured.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";
import dataNfts from "../data/nfts.json";

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingItems, setTrendingItems] = useState([]);
  const [trendingFilters, setTrendingFilters] = useState([]);
  const [users, setUsers] = useState([]);
  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    setFeaturedCards(dataTrending);
    setTrendingItems(dataFeatured);
    setUsers(dataUsers);
    setNfts(dataNfts);
  }, []);

  let url = process.env.apiUrl;

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/featured")
      .then((response) => response.json())
      .then((res) => res.nfts);
    result[0].rows = 2;
    result[0].cols = 3;
    setFeaturedCards(result);
  }, []);

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/trending")
      .then((response) => response.json())
      .then((res) => res.nfts);
    setTrendingItems(result);
  }, []);

  useEffect(async () => {
    const res = await fetch("https://nft-auction.herokuapp.com/trending")
      .then((response) => response.json())
      .then((result) => result.filters.sort);
    setTrendingFilters(res);
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="app">
        <Featured items={featuredCards} />
        <Trending cards={trendingItems} sort={trendingFilters} />
        <TopCollectors collectors={users} />
        <How />
        <Auctions cards={nfts} />
      </div>
      <Footer />
    </Fragment>
  );
}
