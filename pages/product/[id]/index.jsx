import Footer from "../../../src/components/footer/Footer";
import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import dataNfts from "../../../data/nfts.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  let pageID = router.query.id;
  const [nft, setNft] = useState([]);
  useEffect(() => {
    dataNfts.map((nft) => {
      if (nft.id == pageID) setNft(nft);
    });
  }, [pageID]);

  return (
    <>
      <Header />
      <ProductContainer
        title={nft.title}
        creator={nft.creator}
        price={nft.price}
        currency={nft.currency}
        likes={nft.likes}
        timeEnd={nft.auction_end}
        text={nft.details}
        bids={nft.bids}
        url={nft.source}
      />
      <Footer />
    </>
  );
}
