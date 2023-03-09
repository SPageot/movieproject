import axios from "axios";

const getAllMovies = async (category: string, page: string = "1") => {
  const response = await axios.get(
    `http://localhost:3001/trailers?category=${category}&page=${page}`
  );
  if (response?.data) {
    return response.data;
  }
};

export default getAllMovies;
