import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {
  // const [signInToggle, setSignInToggle] = useState(false);
  const user = useSelector(store => store.user);
  console.log('user 7',user);
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
        console.log('user 17',user);
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


  // const handleSignIn = () =>{
  //   navigate('/')
  // }
  return (
    <div className='absolute z-10 flex justify-around w-full items-center py-2 bg-gradient-to-b from-black'>
        <img className='w-40' src={NETFLIX_LOGO} alt="logo" />
        <div className='flex gap-6'>
          <select className='bg-transparent text-white border border-white rounded-md px-4 py-1'>
            <option value="english">English</option>
            <option value="Hindi">Hindi</option>
          </select>
          {
            user && <div className='flex gap-6'>
              <img className='w-10' src={user.photoURL} alt="user-logo" /> 
          <button onClick={handleSignOut} className='bg-red-600 text-white rounded-md px-4 py-1'>Sign Out</button>
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