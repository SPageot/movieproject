"use client";

import { handleMovieClick } from "@/app/lib/getMovieDetails";
import { MovieListType } from "@/types";
import Image from "next/image";
import React from "react";
import styles from "./movielist.module.css";

const MovieList = ({ movieData }: MovieListType) => {
  return (
    <section className={styles.movielist_container}>
      {movieData?.results?.map((movie) => (
        <Image
          onClick={() => handleMovieClick(movie?.title)}
          className={styles.image_container}
          key={movie?.id}
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
          alt={movie?.title}
          width="150"
          height="250"
        />
      ))}
    </section>
  );
};

export default MovieList;
