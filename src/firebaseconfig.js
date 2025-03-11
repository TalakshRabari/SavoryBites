
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY  ,       
  authDomain: "savorybitesreact.firebaseapp.com",
  projectId: "savorybitesreact",
  storageBucket: "savorybitesreact.firebasestorage.app",
  messagingSenderId: "1098515506081",
  appId: "1:1098515506081:web:4e1418e5fe245b1be7e1e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };

const db = getFirestore(app);
export { db };
