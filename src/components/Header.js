import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  // const [signInToggle, setSignInToggle] = useState(false);
  const user = useSelector(store => store.user);
  console.log('user 7',user);
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

  // const handleSignIn = () =>{
  //   navigate('/')
  // }
  return (
    <div className='absolute z-10 flex justify-around w-full items-center py-2 bg-gradient-to-b from-black'>
        <img className='w-40' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        <div className='flex gap-6'>
          <select className='bg-transparent text-white border border-white rounded-md px-4 py-1'>
            <option value="english">English</option>
            <option value="Hindi">Hindi</option>
          </select>
          {
            user && <img className='w-10' src="./default-user-profile-picture.png" alt="user-logo" /> && 
          <button onClick={handleSignOut} className='bg-red-600 text-white rounded-md px-4 py-1'>Sign Out</button>
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