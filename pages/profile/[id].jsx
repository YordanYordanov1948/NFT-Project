import React, { useState, useEffect } from "react";
import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import Footer from "../../src/components/footer/Footer";

export default function Profile() {
  let url = process.env.apiUrl;

  const [profile, setProfile] = useState();
  const [profileFilters, setProfileFilters] = useState();

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/users/367")
      .then((response) => response.json())
      .then((res) => res);
    setProfile(result);
  }, []);

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/users/367")
      .then((response) => response.json())
      .then((res) => res.filters);
    setProfileFilters(result);
  }, []);

  return (
    <div>
      <Header />
      <ProfileHero />
      <ProfileUser />
      <ProfileCollection user={profile} filters={profileFilters} />
      <Footer />
    </div>
  );
}
