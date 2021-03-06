import React, { useState, useEffect } from "react";
import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero";
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import ActivityList from "../../src/components/activity/ActivityList";
import Footer from "../../src/components/footer/Footer";

export default function Activity() {
  let url = process.env.apiUrl;

  const [activity, activityFilters] = useState([]);

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/activities")
      .then((response) => response.json())
      .then((res) => res.activities);
    activityFilters(result);
  }, []);

  return (
    <div>
      <Header />
      <Hero text={"Activity"} />
      <ActivityFilters />
      <ActivityList list={activity} />
      <Footer />
    </div>
  );
}
