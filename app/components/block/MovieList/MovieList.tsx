"use client";

import { handleMovieClick } from "@/app/lib/getMovieDetails";
import { useStore } from "@/src/store";
import { MovieListType } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import styles from "./movielist.module.css";

const MovieList = ({ movieData }: MovieListType) => {
  const { isMovieListOpen } = useStore((state) => state);
  const search = useSearchParams();
  const router = useRouter();
  const pageNumber = search.get("page");
  const categoryType = search.get("category");

  const prevPage = () => {
    if (Number(pageNumber) > 1) {
      router.push(
        `/trailers?category=${categoryType}&page=${String(
          Number(pageNumber) - 1
        )}`
      );
    }
  };

  const nextPage = () => {
    router.push(
      `/trailers?category=${categoryType}&page=${String(
        Number(pageNumber) + 1
      )}`
    );
  };
  return (
    <>
      {isMovieListOpen ? (
        <section className={styles.movielist_container}>
          <div className={styles.change_page_container}>
            <div className={styles.change_page}>
              <span onClick={prevPage}>{"< Prev"}</span>
              <span onClick={nextPage}>{"Next >"}</span>
            </div>
          </div>
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
