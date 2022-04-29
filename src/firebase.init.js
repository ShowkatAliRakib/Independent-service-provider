



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACZq_N0kwxSYNvykFhJijzq7IVe3yO4Mg",
  authDomain: "genius-car-services-87d3d.firebaseapp.com",
  projectId: "genius-car-services-87d3d",
  storageBucket: "genius-car-services-87d3d.appspot.com",
  messagingSenderId: "916722827433",
  appId: "1:916722827433:web:3fe79381f71b98366469b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

