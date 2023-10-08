import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES } from "../utils/constants";
import { addupcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(store => store.movies?.upcomingMovies);

  const getUpcomingMoviesList = async () => {
    const data = await fetch(UPCOMING_MOVIES, API_OPTIONS);
    const json = await data.json();
    const moviesList = json.results;
    dispatch(addupcomingMovies(moviesList));
  };
  useEffect(() => {
   !upcomingMovies && getUpcomingMoviesList();
  }, []);
};

export default useUpcomingMovies;