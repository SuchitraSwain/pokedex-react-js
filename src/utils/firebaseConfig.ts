// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtXtDdc305-f1-1kXz54xYAk_sZkxfI6M",
  authDomain: "pokedex-reactjs-fc177.firebaseapp.com",
  projectId: "pokedex-reactjs-fc177",
  storageBucket: "pokedex-reactjs-fc177.appspot.com",
  messagingSenderId: "459442255082",
  appId: "1:459442255082:web:77ae7135e866da58985393",
  measurementId: "G-4QB7J9TWZW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
