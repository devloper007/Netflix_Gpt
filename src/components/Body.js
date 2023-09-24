import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import Login from './Login';
import Browse from './Browse';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, displayName, email } = user;
        dispatch(addUser({uid: uid, name: displayName, email: email}));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  },[]);

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
          path: '/browse',
          element: <Browse />
      },
    ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body