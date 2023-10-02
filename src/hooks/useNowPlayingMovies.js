import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES_LIST_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMoviesList = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES_LIST_URL, API_OPTIONS);
    const json = await data.json();
    const moviesList = json.results;
    dispatch(addNowPlayingMovies(moviesList));
    console.log("json data", moviesList);
  };
  useEffect(() => {
    getNowPlayingMoviesList();
  }, []);
};

export default useNowPlayingMovies;
