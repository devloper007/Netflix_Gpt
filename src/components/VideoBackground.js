import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import Loader from "./Loader";

const VideoBackground = ({ movieId }) => {
  const [isLoading, setIsLoading] = useState(true);
  useMovieTrailer(movieId);
  const trailerKey = useSelector((store) => store.movies.trailerKey);
  useEffect(()=>{
    if(trailerKey){
      setIsLoading(false);
    }
  },[trailerKey]);

  return (
    <div className="md:w-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" + trailerKey + "?autoplay=1&mute=1"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
