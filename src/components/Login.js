import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { LOGIN_PAGE_COVER, USER_LOGO } from '../utils/constants';
import { lang } from '../utils/langConstants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const language = useSelector(store => store.config.language);

const handleClickEvent = () =>{
  const message = checkValidData(name?.current?.value, email.current.value, password.current.value);
  setErrMessage(message);
  if(message === null){
    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: USER_LOGO
        }).then(() => {
          // Profile updated!
          const { uid, displayName, email, photoURL } = auth.currentUser;
          console.log('profile updated.');
          dispatch(addUser({
            uid: uid,
            email: email, 
            displayName: displayName, 
            photoURL: photoURL
          }))
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMessage(errorMessage)
      });
    }
   else{
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigate("/browse");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
   }
  }
}
  return (
    <div className='flex justify-center'>
        <Header />
          <div>
            <img className='absolute h-screen w-screen object-cover' src={LOGIN_PAGE_COVER} alt="hero-bg-1"/>
        </div>
        <div className='relative top-36 md:top-40 bg-black bg-opacity-80 w-3/4 md:w-3/12 md:mx-auto rounded-md px-2 py-2 mx-auto md:px-8 md:py-8 text-white'>
          <p className='text-lg md:text-3xl text-white pb-6 md:font-semibold'>{isSignInForm ? "Sign In":"Sign Up"}</p>
          <form onSubmit={e => e.preventDefault()} className='flex flex-col gap-4 md:gap-8'>
            {!isSignInForm && <input ref={name} className='px-4 py-1 md:py-3 bg-gray-800 rounded-md text-white text-base outline-none' type="text" name="name" placeholder={lang[language].name}/> }
            <input ref={email} className='px-4 py-1 md:py-3 bg-gray-800 rounded-md text-white text-base outline-none' type="email" name="email" placeholder={lang[language].email}/>
            <input ref={password} className='px-4 py-1 md:py-3 bg-gray-800 rounded-md text-white text-base outline-none' type="password" name="password" placeholder={lang[language].password}/>
            <p className='text-yellow-600'>{errMessage}</p>
            <button onClick={handleClickEvent} className='w-1/2 mx-auto px-4 py-1 md:py-3 bg-red-800 rounded-md text-white font-medium md:text-lg'>{isSignInForm ? "Sign In":"Sign Up"}</button>
            <p className='text-white cursor-pointer' onClick={() => setIsSignInForm(!isSignInForm)}>{isSignInForm ? lang[language].signUpLine : lang[language].alreadyRegistered}</p>
          </form>
        </div>
    </div>
  )
}

export default Login