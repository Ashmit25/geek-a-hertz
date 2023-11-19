import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React from 'react'

const links = [
    {
      label: "Home",
      href: "/",
    },
    {
        label: "Contact",
        href: "/contact",
    },
    {
      label: "About Us",
      href: "/about",
  },
];

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/"><h1 className={styles.heading}>VIROR</h1></Link>
      <div className={styles.navlinks}>
        {links.map(({label,href}) => (
            <Link key={label} href={href}>
                <p className={styles.navlink}>{label}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
