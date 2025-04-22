// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHOAcNlasVrA8xnQLAZzD4wkQIQlKxFGs",
  authDomain: "bookstore1-7b05d.firebaseapp.com",
  projectId: "bookstore1-7b05d",
  storageBucket: "bookstore1-7b05d.firebasestorage.app",
  messagingSenderId: "245280957981",
  appId: "1:245280957981:web:32797ee646352a3c0d08f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);