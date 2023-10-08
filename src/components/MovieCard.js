import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({poster}) => {
  return (
    <div className='w-24 md:w-48'>
        {
          poster && <img className='rounded-md' src={IMG_CDN_URL+poster} alt="movie-poster" />
        }
    </div>
  )
}

export default MovieCard