import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>VIROR | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/leaf.png" />
      </Head>
      <Navbar />
      <main>
        <div className={styles.hometext}>
          <h1>Making The Future Sustainable, One Appliance At A Time</h1>
          <p>
            Lorem nisi cupidatat fugiat ullamco voluptate deserunt quis
            cupidatat excepteur labore Lorem eu. Aliquip voluptate pariatur
            incididunt officia esse nisi. Ipsum excepteur consectetur eiusmod
            consectetur sit ipsum dolor.Lorem nisi cupidatat fugiat ullamco
            voluptate deserunt quis cupidatat excepteur labore Lorem eu.
          </p>
          <div className={styles.homebuttons}>
            <a id="link" href="#about_us">
              <button>Who Are We?</button>
            </a>
            <Link href="/products">
              <button>
                Our Products ➡
              </button>
            </Link>
          </div>
        </div>
        <Image
          src="/kitten.jpg"
          alt="placeholder image"
          width={400}
          height={400}
          priority
        />
      </main>
      <div id="about_us">
        <h2 className={styles.heading}>About Us</h2>
        <div className={styles.aboutus}>
          <p className={styles.aboutpara}>
            Anim nostrud dolore elit quis nisi. Ad minim qui non ipsum est. Ad
            veniam nostrud labore eiusmod cupidatat quis enim laborum occaecat
            labore adipisicing Lorem. Consequat amet nisi consequat consequat ut
            esse amet culpa ullamco est exercitation Lorem ipsum aliqua.
          </p>
          <p className={styles.aboutpara}>
            Anim nostrud dolore elit quis nisi. Ad minim qui non ipsum est. Ad
            veniam nostrud labore eiusmod cupidatat quis enim laborum occaecat
            labore adipisicing Lorem. Consequat amet nisi consequat consequat ut
            esse amet culpa ullamco est exercitation Lorem ipsum aliqua.
          </p>
        </div>
      </div>
    </>
  );
}
