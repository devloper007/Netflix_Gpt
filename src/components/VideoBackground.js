import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
    const [trailerKey, setTrailerKey] = useState(null);
  const getMovieTrailer = async () => {
    const data = await fetch(
      `
        https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailerData = json.results.filter((e) => e.type === "Trailer");
    const trailer = trailerData.length ? trailerData[0] : json.results[0];
    console.log("json 10", trailer);
    setTrailerKey(trailer?.key);
  };

  useEffect(() => {
    getMovieTrailer();
  }, [movieId]);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerKey +"?autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
