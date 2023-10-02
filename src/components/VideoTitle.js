import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';

const VideoTitle = ({title, overview, logo}) => {

// const getMovieImage = async() =>{
//     const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/images`, API_OPTIONS);
//     const json = await data.json();
//     console.log('json 11', json);
// }
// useEffect(()=>{
//     getMovieImage();
// },[id]);

  return (
    <div className='w-screen aspect-video absolute bg-gradient-to-r from-black pt-[14%] pl-[10%]'>
      <div className='flex flex-col gap-4 w-1/3 text-white'>
      <h1 className='font-bold text-3xl'>{title}</h1>
        <p className=''>{overview}</p>
        <div className=''>
            <button className='w-32 px-6 py-2 bg-white rounded-md text-black text-base font-semibold hover:bg-opacity-70'>▶️Play</button>
            <button className='w-32 px-6 py-2 bg-gray-500 rounded-md text-base font-semibold mx-4 bg-opacity-30 hover:bg-opacity-70'>More Info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle