import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React from 'react'
import { usePathname } from "next/navigation";

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
  const pathName = usePathname();
  return (
    <div className={styles.navbar}>
      <Link href="/"><h1 className={styles.navhead}>VIROR</h1></Link>
      <div className={styles.navlinks}>
        {links.map(({label,href}) => (
            <Link key={label} href={href}>
                <p className={pathName == href ? styles.activenav : styles.navlink}>{label}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
