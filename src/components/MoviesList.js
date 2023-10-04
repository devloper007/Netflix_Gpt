import React from 'react';
import MovieCard from './MovieCard';
import Shimmer from './Shimmer';

const MoviesList = ({title, movies}) => {

  return !movies ? <Shimmer /> : (
    <div className='py-4 px-2'>
        <h1 className='font-semibold text-xl text-white'>{title}</h1>
        <div className='flex overflow-x-scroll py-4'>
            <div className='flex flex-row gap-3 hideScrollbar'>
                {
        movies?.map(movie => <MovieCard key={movie?.id} poster={movie?.poster_path} />)
                }
            </div>
        </div>
    </div>
  )
}

export default MoviesList