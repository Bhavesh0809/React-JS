import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDjDXjtibWwxTG8uXn3NplnIS7fbfwn_ro",
  authDomain: "first-firebase-2c77f.firebaseapp.com",
  projectId: "first-firebase-2c77f",
  storageBucket: "first-firebase-2c77f.firebasestorage.app",
  messagingSenderId: "374072082774",
  appId: "1:374072082774:web:64727b19f66607df1f96f7",
  databaseURL: "https://first-firebase-2c77f-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);

export default app;