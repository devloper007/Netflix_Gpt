import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptSearchedResult from './GptSearchedResult';
import { LOGIN_PAGE_COVER } from '../utils/constants';


const GptSearch = () => {
  return (
    <div className='mx-auto'>
           <div>
            <img className='absolute -z-10 object-cover h-screen md:w-full' src={LOGIN_PAGE_COVER} alt="hero-bg-1"/>
        </div>
        <GptSearchBar />
        <GptSearchedResult />
    </div>
  )
}

export default GptSearch