import React from "react";
import Footer from "../../../src/components/footer/Footer";
import Header from "../../../src/components/header/Header";
import ProductContainer from "../../../src/components/product/ProductContainer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();

  let url = process.env.apiUrl;

  const [product, setProduct] = useState();

  useEffect(async () => {
    const result = await fetch("https://nft-auction.herokuapp.com/nfts/{id}")
      .then((response) => response.json())
      .then((res) => res);
    setProduct(result);
  }, []);

  return (
    <div>
      <Header />
      <ProductContainer product={product} />
      <Footer />
    </div>
  );
}
