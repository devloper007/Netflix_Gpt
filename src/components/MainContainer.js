import React from 'react';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(movies === null) return;
    const movie = movies[0];
    const { id, title, overview, poster_path } = movie;

  return (
    <div>
        <VideoTitle title={title} overview={overview} logo={poster_path}/>
         <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer