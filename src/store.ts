import { StoreType } from "@/types";
import { create } from "zustand";

export const useStore = create<StoreType>(() => ({
  selectedTrailer: "",
  movieInfo: null,
  isMovieListOpen: false,
}));
