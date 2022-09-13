// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJbjIYrOBk3eM2FXUJZIReEIEc1GmpSUA",
  authDomain: "vuefirebase-d6d5f.firebaseapp.com",
  projectId: "vuefirebase-d6d5f",
  storageBucket: "vuefirebase-d6d5f.appspot.com",
  messagingSenderId: "326756709087",
  appId: "1:326756709087:web:cc60d9be8849b8fd56af6a",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
