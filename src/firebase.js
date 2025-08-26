import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // ✅ Firestore
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5HTTl07v4VZDrNatB5sDk9MBAfw994e4",
  authDomain: "e-commerce-69bdb.firebaseapp.com",
  projectId: "e-commerce-69bdb",
  storageBucket: "e-commerce-69bdb.appspot.com",
  messagingSenderId: "273468899787",
  appId: "1:273468899787:web:5b913f5f73ba2088f5b64e",
  measurementId: "G-F5XNV4MTJ8",
  databaseURL: "https://e-commerce-69bdb-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app); // ✅ Firestore
export const storage = getStorage(app);
