// Import the functions you need from the SDKs you need
// import firebase from "firebase"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgSAopE32Wcwzh9ubK5juxE9X9uEdanfo",
  authDomain: "whatsapp-mern-bc47b.firebaseapp.com",
  projectId: "whatsapp-mern-bc47b",
  storageBucket: "whatsapp-mern-bc47b.appspot.com",
  messagingSenderId: "518191410115",
  appId: "1:518191410115:web:05e898a12a6650e41deb76",
  measurementId: "G-YNQW6Y736T"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db= app.firestore();
const auth= firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;