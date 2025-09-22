// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config (replace with yours)
const firebaseConfig = {
  apiKey: "AIzaSyDOmx1tInPCsMHMuJ3q5vxfWBDFgQ_ZJFU",
  authDomain: "sit313-login-demo.firebaseapp.com",
  projectId: "sit313-login-demo",
  storageBucket: "sit313-login-demo.firebasestorage.app",
  messagingSenderId: "502090293629",
  appId: "1:502090293629:web:54d231ba9de71602d2ac14",
  measurementId: "G-CSG5NCV47Z"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
