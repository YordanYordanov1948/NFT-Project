import React, { useState, useEffect } from "react";
import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero";
import ActivityFilter from "../../src/components/activity/ActivityFilters";
import ActivityList from "../../src/components/activity/ActivityList";
import Footer from "../../src/components/footer/Footer";

let url = process.env.apiUrl;

const [activity, activityFilters] = useState();

useEffect(async () => {
  const result = await fetch("https://nft-auction.herokuapp.com/activities")
    .then((response) => response.json())
    .then((res) => res);
  activityFilters(result);
}, []);

export default function Activity() {
  return (
    <div>
      <Header />
      <Hero text={"Activity"} />
      <ActivityFilter activity={activity} />
      <ActivityList />
      <Footer />
    </div>
  );
}
