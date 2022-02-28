import React from "react";
import Header from "../../src/components/header/Header";
import Hero from "../../src/components/hero/Hero";
import ActivityFilter from "../../src/components/activity/ActivityFilters";
import ActivityList from "../../src/components/activity/ActivityList";
import Footer from "../../src/components/footer/Footer";
export default function Activity() {
  return (
    <div>
      <Header />
      <Hero text={"Activity"} />
      <ActivityFilter />
      <ActivityList />
      <Footer />
    </div>
  );
}
