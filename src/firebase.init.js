// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId
// };


const firebaseConfig = {
    apiKey: "AIzaSyBe18KjrC-_k91szT_2uLR_siGP8MH2ZZs",
    authDomain: "genius-car-services-639e6.firebaseapp.com",
    projectId: "genius-car-services-639e6",
    storageBucket: "genius-car-services-639e6.appspot.com",
    messagingSenderId: "538741822538",
    appId: "1:538741822538:web:329f7fd5b9871cda1f02b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;