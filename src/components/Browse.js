import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopMovies from "../hooks/useTopMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptSearchToggle = useSelector((store) => store.gpt?.gptSearchToggle);
  useNowPlayingMovies();
  usePopularMovies();
  useTopMovies();
  useUpcomingMovies();

  return (
    <div>
      <div className="flex justify-center">
      <Header />
      </div>
      {gptSearchToggle ? (
        <GptSearch />
      ) : (
        <div className="pt-12 md:pt-0">
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
