import React from "react";
import Footer from "../../../src/components/footer/Footer";
import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import dataNfts from "../../../data/nfts.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  let pageID = router.query.id;
  const [nft, setNft] = useState();
  useEffect(() => {
    dataNfts.map((nft) => {
      if (nft.id == pageID) setNft(nft);
    });
  }, [pageID]);

  return (
    <div>
      <Header />
      <ProductContainer />
      <Footer />
    </div>
  );
}
