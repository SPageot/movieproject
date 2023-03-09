import { create } from "zustand";

export const useStore = create(() => ({
  selectedTrailer: "",
  movieInfo: {},
  isMovieListOpen: true,
}));
