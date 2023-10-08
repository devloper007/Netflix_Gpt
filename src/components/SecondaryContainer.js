import React from 'react';
import MoviesList from './MoviesList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const nowPlayingmovies = useSelector(store => store.movies?.nowPlayingMovies);
    const topMovies = useSelector(store => store.movies?.topMovies);
    const popularMovies = useSelector(store => store.movies?.popularMovies);
    const upcomingMovies = useSelector(store => store.movies?.upcomingMovies);
  return (
    <div className='bg-black'>
        <div className='md:-mt-60 relative z-20'>
        <MoviesList title={"Now Playing"} movies={nowPlayingmovies}/>
        <MoviesList title={"Top"} movies={topMovies}/>
        <MoviesList title={"Popular"} movies={popularMovies}/>
        <MoviesList title={"Upcoming"} movies={upcomingMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer