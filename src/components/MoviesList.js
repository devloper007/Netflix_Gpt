// import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Shimmer from './Shimmer';
// import Loader from './Loader';

const MoviesList = ({title, movies}) => {
 
  return !movies ? <Shimmer /> : (
    <div className='py-1 md:py-4 px-2'>
        <h1 className='font-semibold md:text-xl text-white'>{title}</h1>
        <div className='flex overflow-x-scroll py-4'>
            <div className='flex flex-row gap-2 md:gap-3 hideScrollbar'>
                {
        movies?.map(movie =>(movie?.poster_path && <MovieCard key={movie?.id} poster={movie?.poster_path} />))
                }
            </div>
        </div>
    </div>
  )
}

export default MoviesList