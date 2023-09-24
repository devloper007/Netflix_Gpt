// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCETrYMZkWqbxvmfaSWUlP0Rg8PzCPJelw",
  authDomain: "netflixgpt-31491.firebaseapp.com",
  projectId: "netflixgpt-31491",
  storageBucket: "netflixgpt-31491.appspot.com",
  messagingSenderId: "999466013873",
  appId: "1:999466013873:web:7779b4a9a6b917cd4bfe90",
  measurementId: "G-VX7SPZGGJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();