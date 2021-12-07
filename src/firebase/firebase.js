// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXZMQiyV9SiRhUtIQwCSogwz2UvPW1O1M",
  authDomain: "challenge-c3374.firebaseapp.com",
  projectId: "challenge-c3374",
  storageBucket: "challenge-c3374.appspot.com",
  messagingSenderId: "298544249160",
  appId: "1:298544249160:web:f5b909be612acf6bb9db7d",
  measurementId: "G-EJ19WQF7T6",
};
//-----------------------------
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
