export interface MovieType {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | undefined;
  release_date: string;
  title: string | undefined;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ErrorBoundaryType {
  error: Error;
  reset: () => void;
}

interface MovieDataType {
  dates: { maximum: string; minimum: string };
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
}

export interface MovieListType {
  movieData: MovieDataType;
}
