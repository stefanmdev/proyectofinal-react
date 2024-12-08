// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr1mhPYSUbNaFOsAdOwo8KW6sMxs5wOpQ",
  authDomain: "react-proyectofinal-sd.firebaseapp.com",
  projectId: "react-proyectofinal-sd",
  storageBucket: "react-proyectofinal-sd.firebasestorage.app",
  messagingSenderId: "1061833316183",
  appId: "1:1061833316183:web:9bbb1471d5eff9f2f71012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);