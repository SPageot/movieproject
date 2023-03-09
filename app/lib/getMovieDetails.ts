import { useStore } from "@/src/store";
import axios from "axios";


const handleMovieClick = async (selectedMovie: string) => {
  const selectedMovieResult = await axios.get(
    `http://localhost:3001/trailers/video?trailer=${selectedMovie}`
  );

  useStore.setState({
    selectedTrailer: selectedMovieResult?.data?.movieVideo[0].url,
  });
 console.log(useStore.getState().selectedTrailer);
};

export { handleMovieClick };
