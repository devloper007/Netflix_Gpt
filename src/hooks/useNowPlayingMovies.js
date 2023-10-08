import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES_LIST_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
  const getNowPlayingMoviesList = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES_LIST_URL, API_OPTIONS);
    const json = await data.json();
    const moviesList = json.results;
    dispatch(addNowPlayingMovies(moviesList));
  };
  useEffect(() => {
   !nowPlayingMovies && getNowPlayingMoviesList();
  }, []);
};

export default useNowPlayingMovies;
