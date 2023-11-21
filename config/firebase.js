import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCWf6IePnkVF_DM-fjbBS5SD-P8jaXO1ys",
  authDomain: "pro-seek.firebaseapp.com",
  projectId: "pro-seek",
  storageBucket: "pro-seek.appspot.com",
  messagingSenderId: "328715033389",
  appId: "1:328715033389:web:15cd08d3c87078d83e51a4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const st = getStorage(app);
