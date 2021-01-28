import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app'; 
import { FirebaseContext } from './context/firebase';
import dotenv from 'dotenv';
// import { seedDatabase } from './seed';

const config = {
  apiKey: "AIzaSyDBF9V8ZzRaL9lwqBWeHdCkl20Zr1tPlLs",
  authDomain: "onja-netflix-clone.firebaseapp.com",
  projectId: "onja-netflix-clone",
  storageBucket: "onja-netflix-clone.appspot.com",
  messagingSenderId: "11844310372",
  appId: "1:11844310372:web:203c5a98de5f2110a11671",
  measurementId: "G-M5QTM50ZEZ"
};
// Initialize Firebase


dotenv.config(); 

const firebase = window.firebase.initializeApp(config);

// seedDatabase(firebase);
ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <Glob
      alStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
