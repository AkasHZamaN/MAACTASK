// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7xhsHFA89qQo0qPhOCHNBhlOIRtfNnSA",
  authDomain: "maactask.firebaseapp.com",
  projectId: "maactask",
  storageBucket: "maactask.appspot.com",
  messagingSenderId: "703517985598",
  appId: "1:703517985598:web:d15123efe55d15ca9f7a6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth