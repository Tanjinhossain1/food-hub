// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHlLr9SusOiCmEcKWuhAnlC3MVY71AH3Y",
  authDomain: "food-hub-7e1d2.firebaseapp.com",
  projectId: "food-hub-7e1d2",
  storageBucket: "food-hub-7e1d2.appspot.com",
  messagingSenderId: "25677231826",
  appId: "1:25677231826:web:0a0d167bdc8f1077a3df0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;