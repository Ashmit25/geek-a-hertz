import React from 'react'
import Head from "next/head";
import Navbar from '../../components/Navbar';
import styles from '@/styles/Home.module.css';

function about() {
  return (
    <>
        <Head>
            <title>VIROR | Products</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/leaf.png" />
        </Head>
        <Navbar />
        
    </>
  )
}

export default about