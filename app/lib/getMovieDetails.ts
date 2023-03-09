import axios from "axios";

const handleMovieClick = async (selectedMovie: string) => {
  const selectedMovieResult = await axios.get(
    `http://localhost:3001/trailers/video?trailer=${selectedMovie}`
  );
  console.log(selectedMovieResult.data);

  return selectedMovieResult.data;
};

export { handleMovieClick };
