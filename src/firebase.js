import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = initializeApp({
  apiKey: "-",
  authDomain: "-",
  projectId: "-",
  storageBucket: "-",
  messagingSenderId: "-",
  appId: "-",
});

const db = getFirestore(firebaseApp);

export default db;
