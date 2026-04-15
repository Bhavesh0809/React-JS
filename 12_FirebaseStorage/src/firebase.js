import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDjDXjtibWwxTG8uXn3NplnIS7fbfwn_ro",
    authDomain: "first-firebase-2c77f.firebaseapp.com",
    projectId: "first-firebase-2c77f",
    storageBucket: "first-firebase-2c77f.firebasestorage.app",
    messagingSenderId: "374072082774",
    appId: "1:374072082774:web:b5b09a1b80aa81441f96f7",
    measurementId: "G-42ZRYCXSM0",
    databaseURL: "https://first-firebase-2c77f-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);