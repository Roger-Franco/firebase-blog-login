// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB76yJ3biV4KTKd2ZZ5lEc1aAJFeRAC1f0",
  authDomain: "blog-login-7a821.firebaseapp.com",
  projectId: "blog-login-7a821",
  storageBucket: "blog-login-7a821.appspot.com",
  messagingSenderId: "718549271447",
  appId: "1:718549271447:web:b363dc7efe15013e987ad2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()