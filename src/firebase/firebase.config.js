// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnY5NDnBXOgRlskxr2DPxU61Cv7MJzDtc",
  authDomain: "tourism-vision.firebaseapp.com",
  projectId: "tourism-vision",
  storageBucket: "tourism-vision.appspot.com",
  messagingSenderId: "19602115029",
  appId: "1:19602115029:web:4ad4bb7def5eab0047d55c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);