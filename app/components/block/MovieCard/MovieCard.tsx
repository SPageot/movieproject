import React from "react";
import styles from "./moviecard.module.css";

const MovieCard = () => {
  return (
    <section className={styles.moviecard_container}>
      <div className={styles.video_container}></div>
      <div className={styles.video_description_container}></div>
    </section>
  );
};

export { MovieCard };
