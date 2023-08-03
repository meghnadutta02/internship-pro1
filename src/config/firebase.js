import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCB9atqJ8s0hGMVMmYxrgF99Mo4WDG9fbk",
  authDomain: "project-1-e33bf.firebaseapp.com",
  projectId: "project-1-e33bf",
  storageBucket: "project-1-e33bf.appspot.com",
  messagingSenderId: "683889759284",
  appId: "1:683889759284:web:9664d7d0d68d818e2be661",
  measurementId: "G-HNQGGJ4E1E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
