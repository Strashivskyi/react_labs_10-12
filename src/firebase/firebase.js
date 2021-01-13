import firebase from "firebase";
import "firebase/database";
import "firebase/auth";

const app=firebase.initializeApp({
 
    apiKey: "AIzaSyBtm58F52C4DApfPV_8yvWMBOon137M1-M",
    authDomain: "lab-12-authentification.firebaseapp.com",
    projectId: "lab-12-authentification",
    storageBucket: "lab-12-authentification.appspot.com",
    messagingSenderId: "953869332222",
    appId: "1:953869332222:web:971453a171809ca7fa3faf",
    measurementId: "G-Q8TZMYR3F3"

});



export default app;