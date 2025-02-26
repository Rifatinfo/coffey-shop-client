import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuVTv7aZO4lQdYmBUEZaCb0ofKwRQPX3U",
  authDomain: "coffee-shop-35a39.firebaseapp.com",
  projectId: "coffee-shop-35a39",
  storageBucket: "coffee-shop-35a39.firebasestorage.app",
  messagingSenderId: "1021277112221",
  appId: "1:1021277112221:web:d29dee1a3c815e41bb9174"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
