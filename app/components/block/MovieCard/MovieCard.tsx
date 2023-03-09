"use client";
import React from "react";
import styles from "./moviecard.module.css";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";
import { useStore } from "@/src/store";

const MovieCard = () => {
  const { selectedTrailer, movieInfo } = useStore((state) => state);

  return (
    <section className={styles.moviecard_container}>
      {selectedTrailer ? (
        <>
          <div className={styles.video_container}>
            <div className={styles.image_container}>
              <Image
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movieInfo?.poster_path}`}
                fill
                alt={movieInfo?.title}
              />
            </div>

            <ReactPlayer
              width="100%"
              height="100%"
              url={selectedTrailer}
              controls
              playing
            />
          </div>
          <div className={styles.video_description_container}>
            <p>{movieInfo?.overview}</p>
          </div>
        </>
      ) : null}
    </section>
  );
};

export { MovieCard };
