import React from "react";
import getAllMovies from "../lib/getAllMovies";
import { Dashboard } from "../components/block/Dashboard/Dashboard";
import { MovieCard } from "../components/block/MovieCard/MovieCard";
import MovieList from "../components/block/MovieList/MovieList";

const Trailers = async ({ searchParams: { category, page } }) => {
  const { movieList } = await getAllMovies(category, page);

  return (
    <Dashboard>
      <MovieCard />
      {movieList ? <MovieList movieData={movieList} /> : null}
    </Dashboard>
  );
};

export default Trailers;
