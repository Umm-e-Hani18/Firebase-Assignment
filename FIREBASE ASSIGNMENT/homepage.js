import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,  GoogleAuthProvider , signInWithPopup , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
 import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

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

  const auth=getAuth();
  const db=getFirestore();

  onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
        .then((docSnap)=>{
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserFName').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLName').innerText=userData.lastName;

            }
            else{
                console.log("no document found matching id")
            }
        })
        .catch((error)=>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='/index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })