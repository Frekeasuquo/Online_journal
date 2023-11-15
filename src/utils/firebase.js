// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blog-fe542.firebaseapp.com",
    projectId: "blog-fe542",
    storageBucket: "blog-fe542.appspot.com",
    messagingSenderId: "423751647744",
    appId: "1:423751647744:web:f9557d7b8c90ef97bc8ee5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);