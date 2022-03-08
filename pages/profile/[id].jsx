import React from "react";
import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import Footer from "../../src/components/footer/Footer";

export default function Profile() {
  return (
    <div>
      <Header />
      <ProfileHero />
      <ProfileUser />
      <ProfileCollection />
      <Footer />
    </div>
  );
}
