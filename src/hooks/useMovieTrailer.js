import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerKey } from "../utils/moviesSlice";

const useMovieTrailer =(movieId) =>{
    const dispatch = useDispatch();
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
        getMovieTrailer();
      }, [movieId]);
}

export default useMovieTrailer;