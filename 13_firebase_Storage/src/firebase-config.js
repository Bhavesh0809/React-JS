// src/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";

const firebaseConfig = {
    // COPY AND PASTE FROM FIREBASE CONSOLE:
    apiKey: "AIzaSyDjDXjtibWwxTG8uXn3NplnIS7fbfwn_ro",
    authDomain: "first-firebase-2c77f.firebaseapp.com",
    projectId: "first-firebase-2c77f",
    storageBucket: "first-firebase-2c77f.appspot.com",
    messagingSenderId: "374072082774",
    appId: "1:374072082774:web:64727b19f66607df1f96f7"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);