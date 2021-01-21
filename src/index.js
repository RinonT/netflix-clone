import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { GlobalStyles } from './globalStyles';
import { FirebaseContext } from './context/firebase';
const config = {
    apiKey: "AIzaSyDhqoW0ylhsEJWjRdDmSB2gpbTuM7dxBkY",
    authDomain: "netflix-onja-rinon.firebaseapp.com",
    projectId: "netflix-onja-rinon",
    storageBucket: "netflix-onja-rinon.appspot.com",
    messagingSenderId: "903610645932",
    appId: "1:903610645932:web:aeb15290dae7226b410e09"
    // databaseUrl: "",   
}

const firebase = window.firebase.initializeApp(config)
ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root'));
