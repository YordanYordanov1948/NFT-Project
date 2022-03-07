import React from "react";
import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import Footer from "../../src/components/footer/Footer";
import profileData from "../../data/profile.json";
import filterData from "../../data/filtersProfile.json";
import { useState, useEffect } from "react";
export default function profile() {
  const [filters, setFilters] = useState(null);
  useEffect(() => {
    profileFilters(profileData);
    setFilters(filterData);
  }, []);

  let url = process.env.apiUrl;

  const [profile, profileFilters] = useState([]);

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/users/{id}")
      .then((response) => response.json())
      .then((res) => res.activities);
    activityFilters(result);
  }, []);

  return (
    <div>
      <Header />
      <ProfileHero image={profile.avatar?.backgroundUrl} />
      <ProfileUser
        name={profile.username}
        info={profile.info}
        avatar={profile.avatar?.url}
        verified={profile.verified}
      />
      <ProfileCollection
        user={profile}
        filters={filters}
        items={profile.nfts}
      />
      <Footer />
    </div>
  );
}
