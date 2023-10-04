import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES } from "../utils/constants";
import { addtopMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopMovies = () => {
  const dispatch = useDispatch();
  const getTopMoviesList = async () => {
    const data = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
    const json = await data.json();
    const moviesList = json.results;
    dispatch(addtopMovies(moviesList));
    console.log("json data", moviesList);
  };
  useEffect(() => {
    getTopMoviesList();
  }, []);
};

export default useTopMovies;