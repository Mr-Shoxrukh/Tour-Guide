// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCutT4fqmFDFZFhYe7sk4TLehREDj00rts",
  authDomain: "tour-guide-4e299.firebaseapp.com",
  databaseURL: "https://tour-guide-4e299-default-rtdb.firebaseio.com",
  projectId: "tour-guide-4e299",
  storageBucket: "tour-guide-4e299.firebasestorage.app",
  messagingSenderId: "307189665267",
  appId: "1:307189665267:web:845106fabd76bc44731686",
  measurementId: "G-X1JN2J652B",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
