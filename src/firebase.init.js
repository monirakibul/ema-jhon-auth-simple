// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDScLGkZTbzcJ42eX8_gFYuSMuWTtHFg24",
    authDomain: "ema-john-simple-23ba2.firebaseapp.com",
    projectId: "ema-john-simple-23ba2",
    storageBucket: "ema-john-simple-23ba2.appspot.com",
    messagingSenderId: "670061181193",
    appId: "1:670061181193:web:7155670d1ea3dd05103bd8",
    measurementId: "G-CBGQGP0RML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;