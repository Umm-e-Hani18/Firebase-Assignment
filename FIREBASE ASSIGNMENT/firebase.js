import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCu-HXFpQUpnP-PBPC9g1mHY6MGGcC0sn0",
    authDomain: "forms-707aa.firebaseapp.com",
    projectId: "forms-707aa",
    storageBucket: "forms-707aa.firebasestorage.app",
    messagingSenderId: "744470063585",
    appId: "1:744470063585:web:3e65c02ba01b6036680aa0",
    measurementId: "G-X517QM1EBL"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
