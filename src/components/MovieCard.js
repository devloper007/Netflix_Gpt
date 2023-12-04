import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import Loader from "./Loader";

const MovieCard = ({ poster }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (poster) setIsLoading(false);
  }, [poster]);
  
  return (
    <div className="w-24 md:w-48">
      {isLoading ? (
        <Loader />
      ) : (
        <img
          className="rounded-md"
          src={IMG_CDN_URL + poster}
          alt="movie-poster"
        />
      )}
    </div>
  );
};

export default MovieCard;
