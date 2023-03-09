import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main className={styles.main}>
      <Link href="/trailers">Trailers</Link>
      <section className={styles.main_image}></section>
      <section className={styles.main_description}></section>
    </main>
  );
}
