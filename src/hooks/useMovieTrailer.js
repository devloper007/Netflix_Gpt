import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerKey } from "../utils/moviesSlice";

const useMovieTrailer =(movieId) =>{
    const dispatch = useDispatch();
    const trailerKey = useSelector(store => store.movies?.trailerKey);
    const getMovieTrailer = async () => {
        const data = await fetch(
          `
            https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTIONS
        );
        const json = await data.json();
        const trailerData = json.results.filter((e) => e.type === "Trailer");
        const trailer = trailerData.length ? trailerData[0] : json.results[0];
            dispatch(addTrailerKey(trailer?.key));
      };
    
      useEffect(() => {
       !trailerKey && getMovieTrailer();
      }, [movieId]);
}

export default useMovieTrailer;