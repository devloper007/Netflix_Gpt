import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES } from "../utils/constants";
import { addtopMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopMovies = () => {
  const dispatch = useDispatch();
  const topMovies = useSelector(store => store.movies?.topMovies);

  const getTopMoviesList = async () => {
    const data = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
    const json = await data.json();
    const moviesList = json.results;
    dispatch(addtopMovies(moviesList));
  };
  useEffect(() => {
   !topMovies && getTopMoviesList();
  }, []);
};

export default useTopMovies;