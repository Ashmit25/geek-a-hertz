import Image from "next/image";
import styles from "../src/styles/Card.module.css";

export default function ProductCard({ item }) {
  return (
    <div className={styles.container}>
      <Image
        src={item.image}
        alt={item.name}
        height={250}
        width={250}
        className={styles.img}
        priority="true"
      />

      <div className={styles.bottom}>
        <div className={styles.left}>
          <p className={styles.type}>{item.name}</p>
        </div>
      </div>
      <p className={styles.description}>{item.desc}</p>
    </div>
  );
}
