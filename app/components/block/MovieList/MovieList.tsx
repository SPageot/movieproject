"use client";

import { handleMovieClick } from "@/app/lib/getMovieDetails";
import { useStore } from "@/src/store";
import { MovieListType } from "@/types";
import Image from "next/image";
import React from "react";
import styles from "./movielist.module.css";

const MovieList = ({ movieData }: MovieListType) => {
  const { isMovieListOpen } = useStore((state) => state);
  return (
    <>
      {isMovieListOpen ? (
        <section className={styles.movielist_container}>
          {movieData?.results?.map((movie) => {
            return (
              <Image
                onClick={() => {
                  useStore.setState({ movieInfo: movie });
                  handleMovieClick(movie?.title);
                  useStore.setState({ isMovieListOpen: false });
                }}
                className={styles.image_container}
                key={movie?.id}
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                alt={movie?.title}
                width="150"
                height="250"
              />
            );
          })}
        </section>
      ) : null}
    </>
  );
};

export default MovieList;
