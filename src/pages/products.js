import React from "react";
import Head from "next/head";
import styles from "@/styles/Products.module.css";
import { products as productList } from "../data/products";
import Image from "next/image";
import Card from "../../components/card";

function about() {
  return (
    <>
      <Head>
        <title>VIROR | Products</title>
        <meta name="description" content="Viror: Working For A Sustainable Future" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/leaf.png" />
      </Head>
      <h1 className={styles.heading}>Our Products</h1>
      <div className={styles.grid}>
        {productList.map((item, index) => {
          return <Card item={item} ind={index} key={index} />;
        })}
      </div>
      <h2 className={styles.soon}>More services coming soon!</h2>
    </>
  );
}

export default about;
