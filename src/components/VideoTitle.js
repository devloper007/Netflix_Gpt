import React, { useEffect } from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const VideoTitle = ({title, overview, logo}) => {

useEffect(()=>{
  const truncatedWord = overview.split(' ');
  if(truncatedWord.length > 30){
    overview = truncatedWord.splice(0, 30).join(' ') + '...';
  }
},[]);

  return (
    <div className='w-screen aspect-video absolute bg-gradient-to-r from-black pt-[18%] md:pt-[14%] pl-[10%]'>
      <div className='flex flex-col gap-1 md:gap-4 md:w-1/3 text-white'>
        <img className='w-12 md:w-28' src={IMG_CDN_URL+logo} alt="movie-logo" />
      <h1 className='font-bold md:text-3xl'>{title}</h1>
        <p className='hidden md:inline-block'>{overview}</p>
        <div className='flex flex-row'>
            <button className='w-24 md:w-32 md:px-6 py-1 md:py-2 bg-white rounded-md text-black text-sm md:text-base font-semibold hover:bg-opacity-70'>▶️Play</button>
            <button className='md:w-32 px-6 py-1 md:py-2 bg-gray-500 rounded-md text-sm md:text-base font-semibold mx-4 bg-opacity-30 hover:bg-opacity-70'>More Info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle