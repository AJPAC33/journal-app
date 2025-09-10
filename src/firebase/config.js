// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXPBhBmhlTMay6CHnbO4m8slb0eaSrv-c",
  authDomain: "journal-app-a5186.firebaseapp.com",
  projectId: "journal-app-a5186",
  storageBucket: "journal-app-a5186.firebasestorage.app",
  messagingSenderId: "583791090911",
  appId: "1:583791090911:web:c7be09b2c335b85df2dd6a",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
