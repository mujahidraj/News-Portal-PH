// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4rvXoUwvGg9DvBR-w7Qww6H8HUJyldGc",
  authDomain: "mr-news-portal.firebaseapp.com",
  projectId: "mr-news-portal",
  storageBucket: "mr-news-portal.firebasestorage.app",
  messagingSenderId: "274538830000",
  appId: "1:274538830000:web:a61d36adc6906aabcec375"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app