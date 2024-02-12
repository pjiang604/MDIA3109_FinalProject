import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0_a5CzTZ9Bv7-soj28oe4A-SSdDlZrUw",
  authDomain: "amplify-app-b6928.firebaseapp.com",
  projectId: "amplify-app-b6928",
  storageBucket: "amplify-app-b6928.appspot.com",
  messagingSenderId: "723397871186",
  appId: "1:723397871186:web:3b96c34e5d03022bce018b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);