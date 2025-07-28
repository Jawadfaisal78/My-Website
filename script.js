// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuoZP9YHPDhsVI8Pofpih5N9o-vwIsUlw",
  authDomain: "medicine-88175.firebaseapp.com",
  projectId: "medicine-88175",
  storageBucket: "medicine-88175.firebasestorage.app",
  messagingSenderId: "173300419953",
  appId: "1:173300419953:web:5bdcd85908da5725c8fad0",
  measurementId: "G-QSL2N1PVGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);