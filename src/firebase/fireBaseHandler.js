import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHb-4HVksKUo2mw0zaf5saajx70riR5us",
  authDomain: "react-app-2ba6e.firebaseapp.com",
  databaseURL:
    "https://react-app-2ba6e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-app-2ba6e",
  storageBucket: "react-app-2ba6e.appspot.com",
  messagingSenderId: "839267450945",
  appId: "1:839267450945:web:6e5799b1c89fb9e498c6c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireBaseDatabase = getDatabase(app);
export const fireBaseAuth = getAuth(app);
