import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';
import { addGptSearchToggle } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  // const [signInToggle, setSignInToggle] = useState(false);
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () =>{
signOut(auth).then(() => {
  // Sign-out successful.
  navigate('/')
  console.log('Sign-out successful.');
}).catch((error) => {
  // An error happened.
});
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, displayName, email, photoURL } = user;
        dispatch(addUser({uid: uid, name: displayName, email: email, photoURL:photoURL}));
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')
      }
    });
    return () => unsubscribe(); //Unsubscribe when component unmount
  },[]);

  const handleGptSearchToggle =()=>{
    dispatch(addGptSearchToggle());
  }

  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e.target.value));
  }

  // const handleSignIn = () =>{
  //   navigate('/')
  // }
  return (
    <div className='absolute z-10 flex flex-col justify-between md:flex-row w-full md:w-3/4 md:bg-gradient-to-b md:from-black'>
        <div className='bg-black md:bg-transparent'>
        <img className='w-40 mx-auto' src={NETFLIX_LOGO} alt="logo" />
        </div>
        <div className='flex justify-around md:gap-4 text-sm md:text-md md:px-4 py-1 md:py-4'>
          <button className='bg-purple-600 rounded-md text-white px-2 py-1' onClick={handleGptSearchToggle}>GPT Search</button>
          <select onClick={handleLanguageChange} className='bg-purple-600 md:bg-transparent text-sm text-white border border-white rounded-md px-2'>
            <option value="en">English</option>
            <option value="hindi">Hindi</option>
          </select>
          {
            user && <div className='flex gap-2'>
              <img className='h-8 md:ml-4 w-fit rounded-full' src={user?.photoURL} alt="user-logo"/> 
          <button onClick={handleSignOut} className='bg-red-600 text-white rounded-md px-2'>Sign Out</button>
            </div>
          }
          {/* {
            !user &&
         <button onClick={handleSignIn} className='bg-red-600 text-white rounded-md px-4 py-1'>Sign In</button>
          } */}
        </div>
    </div>
  )
}

export default Header