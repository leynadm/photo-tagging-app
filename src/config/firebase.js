import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsPXaQE2O1s3uFfmzYbml1N076ehz13V0",
  authDomain: "where-is-z.firebaseapp.com",
  projectId: "where-is-z",
  storageBucket: "where-is-z.appspot.com",
  messagingSenderId: "544776480323",
  appId: "1:544776480323:web:431f1dbd90cd7b070ed6f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, firebaseConfig };