// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGXhIkI-AhdHqRSinKqXsciqpaiuNtCxg",
  authDomain: "upes-4c1c5.firebaseapp.com",
  projectId: "upes-4c1c5",
  storageBucket: "upes-4c1c5.firebasestorage.app",
  messagingSenderId: "882894894262",
  appId: "1:882894894262:web:5f454be47f972fbd5de217"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);