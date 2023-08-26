// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRYsKPPacsAVkksiAxhVopV4g2xCTU6pA",
  authDomain: "cmp-firebase-dba28.firebaseapp.com",
  projectId: "cmp-firebase-dba28",
  storageBucket: "cmp-firebase-dba28.appspot.com",
  messagingSenderId: "225075299615",
  appId: "1:225075299615:web:6add19d0576963e0849c2a",
  measurementId: "G-FM3MEN3SZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)
