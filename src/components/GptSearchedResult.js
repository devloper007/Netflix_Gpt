import React from 'react'
import { useSelector } from 'react-redux';
import MoviesList from './MoviesList';

const GptSearchedResult = () => {
  const gptResults = useSelector(store => store.gpt?.gptResults);
  if(!gptResults){
     return;
  }
  const { movieNames, allGptMoviesData } = gptResults;
  return (
    <div  className='bg-black bg-opacity-90 rounded-md mx-4 my-2 py-2 px-4'>
      {
        movieNames && movieNames.map((movieName, index) => (
              <MoviesList key={index} title={movieName} movies={allGptMoviesData[index]}/>
        ))
      }
    </div>
  )
}

export default GptSearchedResult