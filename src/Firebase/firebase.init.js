// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUg7TyEphpDKU1SCISQk4Iky8p5AjUmFo",
  authDomain: "doctor-abdul-hafeez.firebaseapp.com",
  projectId: "doctor-abdul-hafeez",
  storageBucket: "doctor-abdul-hafeez.appspot.com",
  messagingSenderId: "426026305647",
  appId: "1:426026305647:web:4ee6441c3e733d7b7d259a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;