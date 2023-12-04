import React, { useRef, useState } from 'react';
import { lang } from '../utils/langConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { addGptResults } from '../utils/gptSlice';
import { API_OPTIONS } from '../utils/constants';
import Loader from './Loader';

const GptSearchBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const language = useSelector(store => store.config.language);
  const searchTxt = useRef(null);
  const dispatch = useDispatch();

  const getSearchedMovies = async(movieName) =>{
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movieName + "&include_adult=false&language=en-US&page=1",API_OPTIONS);
      const json = await data.json();
      console.log('json 16', json.results);
      return json.results;
  }

  const handleGptSearchClick = async() =>{
    setIsLoading(true);
    console.log('srch',searchTxt.current.value);
    const searchQuery = "Act as a movie recommendation system and suggest some movies for the query: " + searchTxt.current.value + ". only give me the top 5 movies name, comma seperated as the result like this example given ahead. Example: the winter, the avengers, inception, rockey, raid";
      const gptResult = await openai.chat.completions.create({
        messages: [{ role: 'user', content: searchQuery }],
        model: 'gpt-3.5-turbo',
      });
    
      console.log('GptResult',gptResult.choices);
      const gptContent = gptResult.choices[0].message.content.split(",");
      // dispatch(addGptResults(gptContent));
      const moviesData = gptContent.map(movie => getSearchedMovies(movie)); //will get [promise, promise, promise, promise, promise]
      const gptSearchResult = await Promise.all(moviesData); //resolving all promises
      console.log('movie promises',gptSearchResult);
      setIsLoading(false);
      dispatch(addGptResults({movieNames: gptContent, allGptMoviesData: gptSearchResult}));
  }

  return (
    <div className='pt-[40%] md:pt-[10%]'>
        <form className='mx-auto py-2 px-2 w-full md:w-1/2 grid grid-cols-12' onSubmit={e => e.preventDefault()}>
            <input ref={searchTxt} className='border border-gray-600 rounded-md mr-2 px-2 py-1 col-span-9 md:col-span-10' type="text" placeholder={lang[language].gptSearchPlaceholder}/>
            <button onClick={handleGptSearchClick} className='bg-teal-700 rounded-md py-1 px-4 text-white col-span-3 md:col-span-2'>{lang[language].search}</button>
        </form>
       <div className='mt-10'>
       {
          isLoading && <Loader />
        }
       </div>
    </div>
  )
}

export default GptSearchBar