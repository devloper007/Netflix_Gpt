import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { LOGIN_PAGE_COVER, USER_LOGO } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
const handleClickEvent = () =>{
  console.log('email',email);
  console.log(password);
  const message = checkValidData(name?.current?.value, email.current.value, password.current.value);
  setErrMessage(message);
  if(message === null){
    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('user 29',user);
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
      console.log('user',user);
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
    <div className=''>
        <Header />
          <div>
            <img className='absolute' src={LOGIN_PAGE_COVER} alt="hero-bg-1"/>
        </div>
        <div className='relative top-48 bg-black bg-opacity-80 w-3/12 mx-auto rounded-md px-8 py-24 text-white'>
          <p className='text-3xl text-white pb-6 font-semibold'>{isSignInForm ? "Sign In":"Sign Up"}</p>
          <form onSubmit={e => e.preventDefault()} className='flex flex-col gap-8'>
            {!isSignInForm && <input ref={name} className='px-4 py-3 bg-gray-800 rounded-md text-white text-base outline-none' type="text" name="name" placeholder='Name...'/> }
            <input ref={email} className='px-4 py-3 bg-gray-800 rounded-md text-white text-base outline-none' type="email" name="email" placeholder='Email...'/>
            <input ref={password} className='px-4 py-3 bg-gray-800 rounded-md text-white text-base outline-none' type="password" name="password" placeholder='Password...'/>
            <p className='text-yellow-600'>{errMessage}</p>
            <button onClick={handleClickEvent} className='px-4 py-3 bg-red-800 rounded-md text-white font-medium text-lg'>{isSignInForm ? "Sign In":"Sign Up"}</button>
            <p className='text-white cursor-pointer' onClick={() => setIsSignInForm(!isSignInForm)}>{isSignInForm ? "New to Netflix? Sign up now.":"Already registered? Sign In now."}</p>
          </form>
        </div>
    </div>
  )
}

export default Login