import styles from "@/styles/Home.module.css";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Hamburger from "./hamburger";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function Navbar() {
  const pathName = usePathname();
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <Image src="/viror.png" alt="VIROR" width={140} height={55} />
      </Link>
      <div className={styles.navlinks}>
        {links.map(({ label, href }) => (
          <Link key={label} href={href}>
            <p className={pathName == href ? styles.activenav : styles.navlink}>
              {label}
            </p>
          </Link>
        ))}
      </div>
      <Hamburger />
    </div>
  );
}

export default Navbar;
