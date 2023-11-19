import React from 'react'
import Head from "next/head";
import Navbar from '../../components/Navbar'
import styles from "@/styles/Home.module.css"

function contact() {
  return (
    <>
      <Head>
        <title>VIROR | Contact</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/leaf.png" />
      </Head>
      <Navbar />
      <div className={styles.body}>
        <h1 className={styles.heading}>This is the contact page</h1>
      </div>
    </>
  )
}

export default contact
