import React from 'react';
import { lang } from '../utils/langConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const language = useSelector(store => store.config.language);
  return (
    <div className='pt-[10%]'>
        <form className='mx-auto py-2 px-2 w-1/2 grid grid-cols-12'>
            <input className='border border-gray-600 rounded-md mr-2 px-2 py-1 col-span-10' type="text" placeholder={lang[language].gptSearchPlaceholder}/>
            <button className='bg-teal-700 rounded-md py-1 px-4 text-white col-span-2'>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar