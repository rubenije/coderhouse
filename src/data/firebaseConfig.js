import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgqGrSvVFt8AlhbD-sUSmBIgCTUaX09DQ",
    authDomain: "coderhouse-5ff2f.firebaseapp.com",
    projectId: "coderhouse-5ff2f",
    storageBucket: "coderhouse-5ff2f.appspot.com",
    messagingSenderId: "893965659967",
    appId: "1:893965659967:web:aad78b93a70b2c28002d8a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
