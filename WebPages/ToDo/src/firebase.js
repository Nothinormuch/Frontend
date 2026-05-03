// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC33W04ZQh7SskkZoS48AODMZZVEdrrNgs",
  authDomain: "upes-a3d54.firebaseapp.com",
  projectId: "upes-a3d54",
  storageBucket: "upes-a3d54.firebasestorage.app",
  messagingSenderId: "389068948791",
  appId: "1:389068948791:web:3dda842dfd77737559c6b2",
  measurementId: "G-FW25RFBZ6E"
};

// Initialize Firebase
export default app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);