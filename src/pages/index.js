import Head from "next/head";
import styles from "@/styles/Home.module.css";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>VIROR | Home</title>
        <meta
          name="description"
          content="Viror: Working For A Sustainable Future"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/leaf.png" />
      </Head>
      <main>
        <div className={styles.hometext}>
          <h1>Making The Future Sustainable, One Service At A Time</h1>
          <p>
            At Viror we aim at creating a sustainable and eco-friendly
            environment. With our wide-variety of products we hope in making
            nature less polluted and help communities and people in need.
          </p>
          <div className={styles.homebuttons}>
            <a id="link" href="#about_us">
              <button>Who Are We?</button>
            </a>
            <Link href="/products">
              <button>Our Products ➡</button>
            </Link>
          </div>
        </div>

        <Image
          src="/promotion.png"
          alt="Image"
          width={500}
          height={500}
          priority
          className={styles.img}
        />
      </main>
      <div id="about_us">
        <h2 className={styles.heading}>About Us</h2>
        <div className={styles.aboutus}>
          <p className={styles.aboutpara}>
            Pioneering in sustainable development, Viror aims at improving the
            condition of environment by encouraging people and communities to
            switch to more economical methods for a better future. With our
            products we aim to create awareness amongst people about their bad
            habits and how they can help to contribute for a better planet.
          </p>
          <p className={styles.aboutpara}>
            Our products involve a wide variety of eco-friendly and sustainable
            solutions. We expertise in installing solar panels in many areas
            where there is a need of electricity and for commercial purposes. We
            also offer rain water harvesting solutions for houses to help
            preserve water. We also try our best to spread awareness amongst
            people about their absent-minded actions which harm the environment.
          </p>
        </div>
      </div>
    </>
  );
}
