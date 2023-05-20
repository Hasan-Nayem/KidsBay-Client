// Import the functions you need from the SDKs you need
import {  initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPEy4G1zCtWRrpmXS96REmZqKv1gdCmsg",
  authDomain: "p-hero-assignment-11-cc1ef.firebaseapp.com",
  projectId: "p-hero-assignment-11-cc1ef",
  storageBucket: "p-hero-assignment-11-cc1ef.appspot.com",
  messagingSenderId: "337856477691",
  appId: "1:337856477691:web:879226cdacd1044fadb35e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);