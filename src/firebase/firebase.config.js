// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPFTjoqYBwBEnq2QdldBYmQwVQCA-so7E",
  authDomain: "assignment-home.firebaseapp.com",
  projectId: "assignment-home",
  storageBucket: "assignment-home.appspot.com",
  messagingSenderId: "783177073048",
  appId: "1:783177073048:web:2b0c31ad28632910d0ebed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;