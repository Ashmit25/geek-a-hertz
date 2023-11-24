import React from "react";
import Head from "next/head";

import styles from "@/styles/Contact.module.css";

function contact() {
  return (
    <>
      <Head>
        <title>VIROR | Contact</title>
        <meta name="description" content="Viror: Working For A Sustainable Future" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/leaf.png" />
      </Head>

      <h1 className={styles.heading}>Contact Us</h1>
      <div className={styles.flex}>
        <form action="/" method="POST" className={styles.form}>
          <div className={styles.inputgroup}>
            <label>Full Name</label>
            <input
              type="text"
              name="title"
              id="name"
              placeholder="John Doe"
              required
            />
          </div>
          <div className={styles.inputgroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@gmail.com"
              required
            />
          </div>
          <div className={styles.inputgroup}>
            <label>Message</label>
            <textarea
              name="description"
              id="msg"
              cols="30"
              rows="10"
              required
              placeholder="Lorem ipsum dolor sit..."
            ></textarea>
          </div>

          <div className={styles.inputgroup}>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default contact;
