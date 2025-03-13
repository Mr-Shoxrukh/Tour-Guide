// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1f-585nKg90Lm0nb_5iiI82lFZiJxEbM",
  authDomain: "tour-guide-auth-71ee2.firebaseapp.com",
  projectId: "tour-guide-auth-71ee2",
  storageBucket: "tour-guide-auth-71ee2.firebasestorage.app",
  messagingSenderId: "118168949779",
  appId: "1:118168949779:web:d288c33d9c03bcfadadbe6",
  measurementId: "G-CZDFK3SQ5R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
