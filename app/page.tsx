"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const randomMoviePics = [
    "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
    "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
    "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg",
    "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/t79ozwWnwekO0ADIzsFP1E5SkvR.jpg",
  ];

  return (
    <main className={styles.main}>
      <section className={styles.main_image}>
        <Image
          src={
            randomMoviePics[Math.floor(Math.random() * randomMoviePics.length)]
          }
          alt="Movie Titles"
          fill
        />
      </section>
      <section className={styles.main_description}>
        <h1> Welcome to the Movie Project</h1>
      </section>
    </main>
  );
}
